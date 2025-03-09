import { Component } from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';

@Component({
  selector: 'app-borrow-and-returm-details',
  imports: [UserHeaderComponent],
  standalone:true,
  templateUrl: './borrow-and-returm-details.component.html',
  styleUrl: './borrow-and-returm-details.component.scss'
})
export class BorrowAndReturmDetailsComponent {

}
