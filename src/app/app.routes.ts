
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BookCatlogComponent } from './book-catlog/book-catlog.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { BorrowReturnComponent } from './borrow-return/borrow-return.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FeedbackComponent } from './feedback/feedback.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home',component: HomePageComponent},
    {path: 'login',component: LoginPageComponent},
    {path: 'book-catlog',component: BookCatlogComponent},
    {path: 'book-management',component: BookManagementComponent},
    {path: 'borrow-return',component: BorrowReturnComponent},
    {path: 'search-filter',component: SearchFilterComponent},
    {path: 'feedback',component: FeedbackComponent}
];
