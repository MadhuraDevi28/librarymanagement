import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin/admin-header/admin-header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-borrow-return',
  imports: [AdminHeaderComponent],
  standalone:true,
  templateUrl: './borrow-return.component.html',
  styleUrl: './borrow-return.component.scss'
})

export class BorrowReturnComponent {
  searchTerm: string = '';
  books = [
    { bookNo: 1001, bookName: 'Introduction to HTML', author: 'John Doe', borrowedBy: 'Jane Smith', borrowedDate: '2024-02-01', returningDate: '2024-02-15' },
    { bookNo: 1002, bookName: 'CSS Basics', author: 'Jane Doe', borrowedBy: 'John Smith', borrowedDate: '2024-01-20', returningDate: '2024-02-03' }
  ];

  filteredBooks = [...this.books];

  filterTable() {
    this.filteredBooks = this.books.filter(book =>
      book.bookName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      book.borrowedBy.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
