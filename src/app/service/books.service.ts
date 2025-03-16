import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  bookId?: number;
  bookName: string;
  category?: string;
  author?: string;
  availableQty?: number;
  availability?: string;
  location?: string;
  purchasedFrom?: string;
  purchasedQty?: number;
  purchaseDate?: string;
  userId?: number;
  createTimestamp?: string;
  updateTimestamp?: string;
  bookNo?: number;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private baseUrl = 'http://localhost:8080/api/books'; // Change URL if needed

  constructor(private http: HttpClient) {}

  // Get all books
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/getall`);
  }

  // Get a book by ID
  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${id}`);
  }

  // Create a new book
  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}/create`, book);
  }

  // Update a book
  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.baseUrl}/${id}`, book);
  }

  // Delete a book
  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
