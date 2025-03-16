import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [UserHeaderComponent, ReactiveFormsModule],
  standalone:true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
logout() {
throw new Error('Method not implemented.');
}
  profileForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      borrowed: new FormControl({ value: 5, disabled: true }),
      returned: new FormControl({ value: 3, disabled: true }),
    });
  }

  onSave(): void {
    if (this.profileForm.valid) {
      console.log('Profile Updated:', this.profileForm.value);
      alert('Profile updated successfully!');
    } else {
      alert('Please fill in the required fields.');
    }
  }
}