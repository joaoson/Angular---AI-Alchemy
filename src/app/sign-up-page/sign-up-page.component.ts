import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { Profile } from '../Shared/profile';
import { ProfileService } from '../Shared/profile.service';


@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})

export class SignUpPageComponent {
  profile!: Profile
  key: string = '';
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', Validators.required],
      dob: ['', Validators.required],
      phonenumber: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): any {
    if (this.registrationForm.valid) {
      // Create a new Profile object and assign form values
      this.profile = {
        firstName: this.registrationForm.value.firstName,
        Surname: this.registrationForm.value.surname,
        Username: this.registrationForm.value.username,
        DateOfBirth: this.registrationForm.value.dob,
        Phonenumber: this.registrationForm.value.phonenumber,
        Gender: this.registrationForm.value.gender,
        Country: this.registrationForm.value.country,
        Email: this.registrationForm.value.email,
        Password: this.registrationForm.value.password,
      };

      // Send the profile object to the service
      this.profileService.insert(this.profile)

      // Clear the form after submission
      this.registrationForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

}
