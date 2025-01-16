import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent implements OnInit
{
  userForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {this.initialiseForm();
  }
  initialiseForm(): void {
    this.userForm = this.fb.group({
      emailId: ['', [Validators.required]]
    });
  }
  submit(): void {console.log(this.userForm.value)}
}