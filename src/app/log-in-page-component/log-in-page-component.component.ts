import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { Router } from '@angular/router';
import { UserService } from '../Shared/user.service';
import { ProfileService } from '../Shared/profile.service';
import { Profile } from '../Shared/profile';
@Component({
  selector: 'app-log-in-page-component',
  templateUrl: './log-in-page-component.component.html',
  styleUrl: './log-in-page-component.component.css'
})
export class LogInPageComponentComponent {
  registrationForm!: FormGroup;
  credentials = {
    email: '',
    password: ''
  };

  constructor(private fb: FormBuilder,private router: Router, private userService: UserService, private profileService : ProfileService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.credentials = {
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password
      }
      console.log(this.registrationForm.value);
      this.profileService.checkCredentials(this.credentials.email, this.credentials.password).subscribe((user: Profile | undefined) => {
        if (user) {
          // Store user information in the service
          this.userService.setUser(user);

          // Navigate to the profile page after login
          this.router.navigate(['/profile']);
        } else {
          // Handle invalid credentials
          console.log('Invalid email or password');
        }
      });
    }
    else{

    }
    }
  }
