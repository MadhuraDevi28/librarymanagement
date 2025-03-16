import { Component, OnInit } from '@angular/core';
import { BooksService, Book } from '../service/books.service';
import { AdminHeaderComponent } from "../admin/admin-header/admin-header.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.scss'],
  imports: [AdminHeaderComponent, NgFor]
})
export class BookManagementComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.booksService.getAllBooks().subscribe(
      (data) => {
        this.books = data;
        console.log('Books loaded:', this.books);
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }
}
