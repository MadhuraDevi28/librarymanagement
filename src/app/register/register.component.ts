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
      userClass: ['', Validators.required],
      registerNo: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      mobileNo: ['', Validators.required],
    });
  }

  submit(): void {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value); // Debugging
      this.userdetailsService.registerUser(this.userForm.value).subscribe({
        next: (response: any) => {
          console.log('Registration successful:', response);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Error occurred:', err);
        }
      });
    } else {
      console.log('Form is invalid:', this.userForm.errors);
    }
  }
}