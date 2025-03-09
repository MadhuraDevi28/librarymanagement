import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdetailsService } from '../service/userdetails.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userdetailsService:UserdetailsService,
    private router: Router ,
  ) { }

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      class: ['', Validators.required],
      registerNo: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      mobile: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.userForm.valid) {
      // Call the service to register the user
      this.userdetailsService.registerUser(this.userForm.value).subscribe({
        next: (response: any) => {
          console.log('Registration successful:', response);
          this.router.navigate(['/login']);  // Navigate to login page on success
        },
        error: (err: any) => {
          console.error('Registration failed:', err);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
