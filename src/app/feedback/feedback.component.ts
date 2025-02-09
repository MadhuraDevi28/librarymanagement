import { Component } from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';

@Component({
  selector: 'app-feedback',
  imports: [UserHeaderComponent],
  standalone:true,
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

}
