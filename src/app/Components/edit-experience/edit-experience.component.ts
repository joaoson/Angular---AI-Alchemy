import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienceService } from '../../Shared/experience.service';
import { ProfileService } from '../../Shared/profile.service';
import { UserService } from '../../Shared/user.service';
import { Profile } from '../../Shared/profile';
import { Experience } from '../../Shared/experience';
import {Location} from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  key!: string;
  experienceForm!: FormGroup;
  profile!: Profile | null;
  experience!: Experience | null;
  profiles! : Observable<any>;

 constructor(private profileServce: ProfileService, private location: Location,private fb: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute,  private experienceService: ExperienceService){}

  ngOnInit(): void {
    this.key = this.route.snapshot.paramMap.get('key') || ''; // Get the key from route parameters
    console.log(this.key)
    this.loadExperience();
    this.experienceForm = this.fb.group({
      title: [this.experience?.title, Validators.required],
      description: [this.experience?.description, Validators.required],
      date: [this.experience?.date, Validators.required]
    });
    this.profiles = this.profileServce.getAll()
    console.log(this.experience)
    this.profile = this.userService.getUser();
    if(this.profile == null){
      this.router.navigate(['/login']);
      return
    }
  }

  back(){
    this.location.back(); // <-- go back to previous location on cancel

  }

  loadExperience(): void {
    if (this.key) {
      this.experienceService.getExperience(this.key).subscribe(experience => {
        this.experience = experience;
        console.log(experience)
        this.experienceForm.patchValue(experience);
      });
    }
  }

  onSubmit(): any {
    if (this.experienceForm.valid) {
      if(this.profile == null){
        return
      }
      // Create a new Profile object and assign form values
      const updatedExperience: Experience = {
        ...this.experience,
        title: this.experienceForm.value.title,
        description: this.experienceForm.value.description,
        date: this.experienceForm.value.date,
        user: this.profile.Username
      };
      this.experienceService.updateExperience(updatedExperience, this.key)
        .then(() => {
          console.log('Experience updated successfully');
          this.router.navigate(['/profile']); // Redirect to settings page after update
        })
        .catch((error: any) => {
          console.error('Error updating experience:', error);
        });
    } else {
      console.log('Form is invalid');
    }
  }

}
