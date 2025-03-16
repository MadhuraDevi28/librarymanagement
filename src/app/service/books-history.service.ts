import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserBooksHistory {
  bookHistoryId?: number;
  borrowDate: string;
  returnDate: string;
  bookId: number;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserBooksHistoryService {
  private baseUrl = 'http://localhost:8080/api/borrow-and-return'; // Backend URL

  constructor(private http: HttpClient) {}

  // Get user book history by user ID
  getUserBooksHistory(userId: string): Observable<UserBooksHistory[]> {
    return this.http.get<UserBooksHistory[]>(`${this.baseUrl}?userid=${userId}`);
  }

  // Create a new user book history
  createUserBooksHistory(userBooksHistory: UserBooksHistory): Observable<UserBooksHistory> {
    return this.http.post<UserBooksHistory>(`${this.baseUrl}/create`, userBooksHistory);
  }
}
