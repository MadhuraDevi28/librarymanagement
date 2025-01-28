import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-book-catlog',
  imports: [],
  templateUrl: './book-catlog.component.html',
  styleUrl: './book-catlog.component.scss'
})
export class BookCatlogComponent implements OnInit {
  books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
      availability: 'Available',
      feedback: ['Amazing storytelling', 'A timeless classic'],
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Fiction',
      availability: 'Checked Out',
      feedback: ['Thought-provoking', 'A must-read for everyone'],
    },
    {
      title: '1984',
      author: 'George Orwell',
      category: 'Dystopian',
      availability: 'Available',
      feedback: ['Chilling and insightful', 'Still relevant today'],
    },
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      category: 'Programming',
      availability: 'Available',
      feedback: ['Essential for developers', 'Very informative'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}