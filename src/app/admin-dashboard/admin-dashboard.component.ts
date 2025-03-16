import { Component, OnInit } from '@angular/core';
import { AdminHeaderComponent } from '../admin/admin-header/admin-header.component';
import { UserdetailsService } from '../service/userdetails.service';
import { BooksService } from '../service/books.service';
@Component({
  selector: 'app-admin-dashboard',
  imports: [AdminHeaderComponent],
  standalone:true,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit{

  totalUsers!: number;
  totalbooks!:number;
  constructor(private userService: UserdetailsService,
    private booksService: BooksService,
  ){}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((response)=>{
      this.totalUsers = response.length;
    });
    this.booksService.getAllBooks().subscribe((response)=>{
      this.totalbooks = response.length;
    })
  }

}
