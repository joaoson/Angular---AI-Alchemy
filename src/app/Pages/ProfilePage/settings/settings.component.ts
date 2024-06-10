import { Component } from '@angular/core';
import { Profile } from '../../../Shared/profile';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../../Shared/profile.service';
import { UserService } from '../../../Shared/user.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  profile!: Profile | null;
  key: string = '';
  registrationForm!: FormGroup;
  profileUpdated!: Profile | null;


  constructor(private fb: FormBuilder, private profileService: ProfileService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
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
