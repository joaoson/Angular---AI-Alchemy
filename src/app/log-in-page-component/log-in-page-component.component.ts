import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
@Component({
  selector: 'app-log-in-page-component',
  templateUrl: './log-in-page-component.component.html',
  styleUrl: './log-in-page-component.component.css'
})
export class LogInPageComponentComponent {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

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

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    }
    else{

    }
  }
}
