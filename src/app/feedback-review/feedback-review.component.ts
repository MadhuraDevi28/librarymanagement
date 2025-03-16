import { Component, OnInit } from '@angular/core';
import { AdminHeaderComponent } from '../admin/admin-header/admin-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackService, Feedback } from '../service/feedback.service';
import { BooksService, Book } from '../service/books.service';
import { NgFor } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-feedback-review',
  imports: [AdminHeaderComponent, NgFor, ReactiveFormsModule],
  standalone: true,
  templateUrl: './feedback-review.component.html',
  styleUrl: './feedback-review.component.scss',
})
export class FeedbackReviewComponent implements OnInit {
  feedbackList: Feedback[] = []; // Stores raw feedback
  filteredFeedbackList: any[] = []; // Stores enriched feedback with book details
  searchText: string = '';

  constructor(private feedbackService: FeedbackService, private booksService: BooksService) {}

  ngOnInit(): void {
    this.loadFeedback();
  }

  loadFeedback(): void {
    this.feedbackService.getAllFeedback().subscribe(
      (feedbackData) => {
        this.feedbackList = feedbackData;
        this.fetchBookDetails();
      },
      (error) => {
        console.error('Error fetching feedback:', error);
      }
    );
  }

  fetchBookDetails(): void {
    const requests = this.feedbackList.map((feedback) =>
      this.booksService.getBookById(feedback.bookId)
    );

    forkJoin(requests).subscribe(
      (books: Book[]) => {
        this.filteredFeedbackList = this.feedbackList.map((feedback, index) => ({
          ...feedback,
          bookName: books[index]?.bookName || 'Unknown',
          author: books[index]?.author || 'Unknown',
        }));
      },
      (error) => {
        console.error('Error fetching book details:', error);
      }
    );
  }

  searchFeedback(): void {
    this.filteredFeedbackList = this.feedbackList.filter((feedback) =>
      feedback.bookName.toLowerCase().includes(this.searchText.toLowerCase()) ||
      feedback.author.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  sortFeedback(field: string): void {
    this.filteredFeedbackList.sort((a, b) => (a[field] > b[field] ? 1 : -1));
  }
}
