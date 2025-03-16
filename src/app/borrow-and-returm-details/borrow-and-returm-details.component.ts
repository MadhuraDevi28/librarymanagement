import { Component, OnInit } from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { UserBooksHistory, UserBooksHistoryService } from '../service/books-history.service';
import { NgFor } from '@angular/common';
import { BooksService } from '../service/books.service';

interface BorrowedBookDetails {
  siNo: number;
  bookName: string;
  author: string;
  borrowDate: string;
  returnDate: string;
}

@Component({
  selector: 'app-borrow-and-returm-details',
  imports: [UserHeaderComponent, NgFor],
  standalone: true,
  templateUrl: './borrow-and-returm-details.component.html',
  styleUrl: './borrow-and-returm-details.component.scss',
})
export class BorrowAndReturmDetailsComponent implements OnInit {
  borrowedBooks: BorrowedBookDetails[] = [];

  constructor(
    private historyService: UserBooksHistoryService,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.getHistory('1'); // Replace '1' with actual user ID dynamically
  }

  getHistory(userId: string): void {
    this.historyService.getUserBooksHistory(userId).subscribe(
      (historyData) => {
        console.log('User Books History:', historyData);
        
        // Fetch book details for each entry
        const bookDetailsRequests = historyData.map((history, index) =>
          this.booksService.getBookById(history.bookId).subscribe(
            (bookData) => {
              this.borrowedBooks.push({
                siNo: index + 1,
                bookName: bookData.bookName || 'Unknown',
                author: bookData.author || 'Unknown',
                borrowDate: history.borrowDate,
                returnDate: history.returnDate,
              });
            },
            (error) => {
              console.error(`Error fetching book details for Book ID: ${history.bookId}`, error);
            }
          )
        );
      },
      (error) => {
        console.error('Error fetching user book history:', error);
      }
    );
  }
}
