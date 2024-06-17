import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienceService } from '../../Shared/experience.service';
import { ProfileService } from '../../Shared/profile.service';
import { UserService } from '../../Shared/user.service';
import { Profile } from '../../Shared/profile';
import { Experience } from '../../Shared/experience';
import {Location} from '@angular/common';
import { Model } from '../../Shared/model';
import { ModelService } from '../../Shared/model.service';

@Component({
  selector: 'app-edit-model',
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.css']
})
export class EditModelComponent implements OnInit {
  key!: string;
  experienceForm!: FormGroup;
  profile!: Profile | null;
  experience!: Experience | null;
  model!: Model | null;


 constructor(private location: Location,private fb: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute, private modelService: ModelService,  private experienceService: ExperienceService){}

  ngOnInit(): void {
    this.key = this.route.snapshot.paramMap.get('key') || ''; // Get the key from route parameters
    console.log(this.key)
    this.loadExperience();
    this.experienceForm = this.fb.group({
      title: [this.model?.title, Validators.required],
      description: [this.model?.description, Validators.required],
      date: [this.model?.date, Validators.required]
    });
    console.log(this.model)
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
      this.modelService.getExperience(this.key).subscribe(model => {
        this.model = model;
        console.log(model)
        this.experienceForm.patchValue(model);
      });
    }
  }

  onSubmit(): any {
    if (this.experienceForm.valid) {
      if(this.profile == null){
        return
      }
      // Create a new Profile object and assign form values
      const updatedExperience: Model = {
        ...this.model,
        title: this.experienceForm.value.title,
        description: this.experienceForm.value.description,
        date: this.experienceForm.value.date,
        user: this.profile.Username
      };
      this.modelService.updateExperience(updatedExperience, this.key)
        .then(() => {
          console.log('Model updated successfully');
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
