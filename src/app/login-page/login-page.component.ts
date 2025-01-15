import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit

{
  userForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
  ){}
  ngOnInit(): void {this.initialiseForm();
    
  }
  initialiseForm(): void {
    this.userForm = this.fb.group({
      emailId: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role:['',[Validators.required]]
    }); 
  }
  
  loginUser(): void {console.log(this.userForm.value)
  }
} 

