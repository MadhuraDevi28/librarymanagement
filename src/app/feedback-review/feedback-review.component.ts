import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin/admin-header/admin-header.component';

@Component({
  selector: 'app-feedback-review',
  imports: [AdminHeaderComponent],
  standalone:true,
  templateUrl: './feedback-review.component.html',
  styleUrl: './feedback-review.component.scss'
})
export class FeedbackReviewComponent {

}
