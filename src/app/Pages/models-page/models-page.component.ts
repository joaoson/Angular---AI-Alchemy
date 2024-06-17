import { Component } from '@angular/core';
import { Profile } from '../../Shared/profile';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../Shared/profile.service';
import { UserService } from '../../Shared/user.service';
import { Router } from '@angular/router';
import { Observable, first } from 'rxjs';
import { ModelService } from '../../Shared/model.service';
import { Model } from '../../Shared/model';

@Component({
  selector: 'app-settings',
  templateUrl: './models-page.component.html',
  styleUrl: './models-page.component.css'
})
export class ModelsPageComponent {
  profile!: Profile | null;
  key: string = '';
  experienceForm!: FormGroup;
  profileUpdated!: Profile | null;
  models! : Observable<any>;
  model!: Model ;


  constructor(private modelsService: ModelService,  private fb: FormBuilder, private profileService: ProfileService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.profile = this.userService.getUser();
    if(this.profile == null){
      this.router.navigate(['/login']);
      return
    }
    this.experienceForm = this.fb.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
      date: ['', Validators.required],
      url: [''],
    });
    this.models = this.modelsService.getExperiencesByUser(this.profile.Username);
  }
  onSubmit(): any {
    console.log("rodou")
    if (this.experienceForm.valid) {
      this.model = {
        title: this.experienceForm.value.title,
        description: this.experienceForm.value.company,
        date: this.experienceForm.value.date,
        user: this.profile?.Username,
        url: this.experienceForm.value.url,
        likes: 0
      };
      console.log(this.model)
      // Send the profile object to the service
      this.modelsService.insert(this.model)

      // Clear the form after submission
      this.experienceForm.reset();
      location.reload();

    } else {
      console.log('Form is invalid');
    }
  }


  delete(key: string) {
    console.log(key)
    this.modelsService.delete(key);
  }


  edit(key: string | null): void {
    if (key) {
      this.router.navigate(['/edit-model', key]);
    }}
}
