import { Component, OnInit } from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { Book, BooksService } from '../service/books.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-book-catlog',
  imports: [UserHeaderComponent, NgFor],
  standalone: true,
  templateUrl: './book-catlog.component.html',
  styleUrl: './book-catlog.component.scss',
})
export class BookCatlogComponent implements OnInit {
  books: Book[] = []; // Array to store books
  selectedBook: Book | null = null; // For displaying a selected book
  newBook: Book = {
    bookName: '',
    category: '',
    author: '',
    availableQty: 0,
    availability: '',
    location: '',
    purchasedFrom: '',
    purchasedQty: 0,
    purchaseDate: '',
    userId: 0,
    createTimestamp: '',
    updateTimestamp: '',
    bookNo: 0,
  };

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  // Fetch all books
  getAllBooks(): void {
    this.booksService.getAllBooks().subscribe(
      (data) => {
        console.log(data);
        this.books = data;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  // Fetch a book by ID
  getBookById(id: number): void {
    this.booksService.getBookById(id).subscribe(
      (data) => {
        this.selectedBook = data;
      },
      (error) => {
        console.error('Error fetching book:', error);
      }
    );
  }

  // Add a new book
  addBook(): void {
    this.booksService.createBook(this.newBook).subscribe(
      (data) => {
        this.books.push(data);
        this.newBook = {
          bookName: '',
          category: '',
          author: '',
          availableQty: 0,
          availability: '',
          location: '',
          purchasedFrom: '',
          purchasedQty: 0,
          purchaseDate: '',
          userId: 0,
          createTimestamp: '',
          updateTimestamp: '',
          bookNo: 0,
        };
      },
      (error) => {
        console.error('Error adding book:', error);
      }
    );
  }

  // Update a book
  updateBook(id: number): void {
    if (!this.selectedBook) return;

    this.booksService.updateBook(id, this.selectedBook).subscribe(
      (data) => {
        const index = this.books.findIndex((book) => book.bookId === id);
        if (index !== -1) {
          this.books[index] = data;
        }
      },
      (error) => {
        console.error('Error updating book:', error);
      }
    );
  }

  // Delete a book
  deleteBook(id: number): void {
    this.booksService.deleteBook(id).subscribe(
      () => {
        this.books = this.books.filter((book) => book.bookId !== id);
      },
      (error) => {
        console.error('Error deleting book:', error);
      }
    );
  }
}
