import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdetailsService } from '../service/userdetails.service';

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
    private userdetailsService:UserdetailsService,
    private router:Router,
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
  
  login(): void {
    this.userdetailsService.login(this.userForm.value).subscribe((response)=>{
      this.router.navigate(['/home']);
    });
  }
  
} 

