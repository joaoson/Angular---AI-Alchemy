import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienceService } from '../../Shared/experience.service';
import { ProfileService } from '../../Shared/profile.service';
import { UserService } from '../../Shared/user.service';
import { Profile } from '../../Shared/profile';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  key!: string;
  experienceForm!: FormGroup;
  profile!: Profile | null;
  registrationForm!: FormGroup;

 constructor(private fb: FormBuilder, private profileService: ProfileService, private userService: UserService, private router: Router, private route: ActivatedRoute,  private experienceService: ExperienceService){}

  ngOnInit(): void {
    this.key = this.route.snapshot.paramMap.get('key') || ''; // Get the key from route parameters
    console.log(this.key)
    this.experienceForm = this.fb.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.profile = this.userService.getUser();
    if(this.profile == null){
      this.router.navigate(['/login']);
      return
    }
    this.registrationForm = this.fb.group({
      firstName: [this.profile.firstName, Validators.required],
      surname: [this.profile.Surname, Validators.required],
      dob: [this.profile.DateOfBirth, Validators.required],
      phonenumber: [this.profile.Phonenumber, Validators.required],
      gender: [this.profile.Gender, Validators.required],
      country: [this.profile.Country, Validators.required],
      email: [this.profile.Email, [Validators.required, Validators.email]],
    });

    this.loadExperience();
  }

  loadExperience(): void {
    if (this.key) {
      this.experienceService.getExperience(this.key).subscribe(experience => {
        this.experienceForm.patchValue(experience);
      });
    }
  }

  onSubmit(): any {
    if (this.registrationForm.valid) {
      if(this.profile == null){
        return
      }
      // Create a new Profile object and assign form values
      const updatedProfile: Profile = {
        ...this.profile, // Include existing profile properties (including key if present)
        firstName: this.registrationForm.value.firstName,
        Surname: this.registrationForm.value.surname,
        DateOfBirth: this.registrationForm.value.dob,
        Phonenumber: this.registrationForm.value.phonenumber,
        Gender: this.registrationForm.value.gender,
        Country: this.registrationForm.value.country,
        Email: this.registrationForm.value.email,
      };

      // Send the profile object to the service
      if(this.profile.key == undefined){
        return
      }
      if (updatedProfile.key) {
        this.profileService.update(updatedProfile, updatedProfile.key)
          .then(() => {
            console.log('Profile updated successfully');
            this.userService.setUser(updatedProfile)
            console.log(updatedProfile)
            console.log(this.profile)
          })
          .catch((error: any) => {
            console.error('Error updating profile:', error);
          });
      }      console.log("passou")

    } else {
      console.log('Form is invalid');
    }
  }

}
