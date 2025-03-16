import { Component, OnInit } from '@angular/core';
import { AdminHeaderComponent } from '../admin/admin-header/admin-header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book, BooksService } from '../service/books.service';
import { NgFor } from '@angular/common';
import { UserBooksHistoryService } from '../service/books-history.service';

@Component({
  selector: 'app-borrow-return',
  imports: [
    AdminHeaderComponent,
    ReactiveFormsModule,
    NgFor
  ],
  standalone:true,
  templateUrl: './borrow-return.component.html',
  styleUrl: './borrow-return.component.scss'
})

export class BorrowReturnComponent implements OnInit{
  books: any[] = [];

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
      cupboardNo: undefined,
    };

  addBookForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private bookHistoryService: UserBooksHistoryService,
    private bookService: BooksService,
  ){

  }
  ngOnInit(): void {
    this.initializeForm();
    this.bookService.getAllBooks().subscribe((response)=>{

      console.log('final',response);
      
      this.books = response
    
  })
    
  }
  
  initializeForm(){
this.addBookForm = this.formBuilder.group({
  bookNo: ['', Validators.required],
      bookName: ['', Validators.required],
      author: ['', Validators.required],
      registerNo: ['', Validators.required],
      borrowedBy: ['', Validators.required],
      borrowedDate: ['', Validators.required],
      returningDate: ['', Validators.required],
})
  }
  onSubmit() {
    if (this.addBookForm.valid) {

      const bookId = this.addBookForm.get('bookNo')?.value;
      this.bookService.getBookById(bookId).subscribe((book)=>{
        console.log(book);
        
        this.bookHistoryService.createUserBooksHistory(this.addBookForm.value).subscribe((response)=>{

          this.bookService.getAllBooks().subscribe((response)=>{

            console.log('final',response);
            
            this.books = response
          })

          
          

        })
      },(error)=>{
        console.log('Book not found');
        
      })
      
    } else {
      console.log('Form is not valid');
    }
  }
}
