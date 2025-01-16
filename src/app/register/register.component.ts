import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
  ){}
  ngOnInit(): void {this.initialiseForm();
    
  }
  initialiseForm(): void {
    this.userForm = this.fb.group({
      name: ['',Validators.required],
      class:['',Validators.required],
      registerNo:['',Validators.required],
      emailId: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      role: ['',[Validators.required]],
      confirmPassword: ['',[Validators.required]],
      mobile: ['',[Validators.required]]
    }); 
  }
  
  submit(): void {console.log(this.userForm.value)
  }

}
