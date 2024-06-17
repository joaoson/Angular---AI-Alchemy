import { Component, ViewEncapsulation } from '@angular/core';
import { Experience } from '../../../Shared/experience';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienceService } from '../../../Shared/experience.service';
import { Observable } from 'rxjs';
import { Profile } from '../../../Shared/profile';
import { UserService } from '../../../Shared/user.service';
import { Router } from '@angular/router';
import { ProfileService } from '../../../Shared/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  encapsulation: ViewEncapsulation.None

})
export class ProfileComponent {
  experience!: Experience
  key: string = '';
  experienceForm!: FormGroup;
  experiences!: Observable<any>;
  profile!: Profile | null;
  profiles!:Observable<any>;

  constructor(private profileService: ProfileService, private fb: FormBuilder, private experienceService: ExperienceService, private userService : UserService,private router: Router) {}

  ngOnInit(): void {
    this.profile = this.userService.getUser();
    if(this.profile == null){
      this.router.navigate(['/login']);
      return
    }
    this.experiences = this.experienceService.getExperiencesByUser(this.profile.Username);
    console.log(this.profile)
    this.profiles = this.profileService.getAll()
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
        date: this.experienceForm.value.date,
        user: this.profile?.Username,
        place: "teste"
      };
      console.log(this.experience)
      // Send the profile object to the service
      this.experienceService.insert(this.experience)

      // Clear the form after submission
      this.experienceForm.reset();
      location.reload();

    } else {
      console.log('Form is invalid');
    }
  }

  delete(key: string) {
    this.experienceService.delete(key);
  }


  edit(key: string | null): void {
    if (key) {
      this.router.navigate(['/edit-experience', key]);
    }}

}
