import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin/admin-header/admin-header.component';


@Component({
  selector: 'app-borrow-return',
  imports: [AdminHeaderComponent],
  standalone:true,
  templateUrl: './borrow-return.component.html',
  styleUrl: './borrow-return.component.scss'
})
export class BorrowReturnComponent {

}
