import { Component } from '@angular/core';
import { Experience } from '../../../Shared/experience';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienceService } from '../../../Shared/experience.service';
import { Observable } from 'rxjs';
import { Profile } from '../../../Shared/profile';
import { UserService } from '../../../Shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  experience!: Experience
  key: string = '';
  experienceForm!: FormGroup;
  experiences!: Observable<any>;
  profile!: Profile | null;


  constructor(private fb: FormBuilder, private experienceService: ExperienceService, private userService : UserService) {}

  ngOnInit(): void {
    this.profile = this.userService.getUser();
      this.experiences = this.experienceService.getAll();
    console.log(this.profile)
    this.experienceForm = this.fb.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit(): any {
    if (this.experienceForm.valid) {
      console.log("passou")
      this.experience = {
        title: this.experienceForm.value.title,
        description: this.experienceForm.value.company,
        date: this.experienceForm.value.date
      };
      console.log(this.experience)
      // Send the profile object to the service
      this.experienceService.insert(this.experience)

      // Clear the form after submission
      this.experienceForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  delete(key: string) {
    this.experienceService.delete(key);
  }

  edit(experience: Experience, key: string) {
    this.experienceService.update(experience, key);
  }

}
