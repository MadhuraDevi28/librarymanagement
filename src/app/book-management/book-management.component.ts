import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin/admin-header/admin-header.component';

@Component({
  selector: 'app-book-management',
  imports: [AdminHeaderComponent],
  standalone:true,
  templateUrl: './book-management.component.html',
  styleUrl: './book-management.component.scss'
})
export class BookManagementComponent {

}
