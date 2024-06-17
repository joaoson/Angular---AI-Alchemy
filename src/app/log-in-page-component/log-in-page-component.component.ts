import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { Router } from '@angular/router';
import { UserService } from '../Shared/user.service';
import { ProfileService } from '../Shared/profile.service';
import { Profile } from '../Shared/profile';
import Swal from 'sweetalert2';
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
          this.userService.setUser(user);

          this.router.navigate(['/profile']);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your Email or Password are not correct!",
          });
          console.log('Invalid email or password');

        }
      });
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Please fill in the fieds correctly!",
        text: "You need a real Email and a password with a minimun length of 6 characters. ",
      });

    }
    }
  }
