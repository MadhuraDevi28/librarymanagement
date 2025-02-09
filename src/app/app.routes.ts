
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BookCatlogComponent } from './book-catlog/book-catlog.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { BorrowReturnComponent } from './borrow-return/borrow-return.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RegisterComponent } from './register/register.component';
import{AdminDashboardComponent} from'./admin-dashboard/admin-dashboard.component';
import { BorrowAndReturmDetailsComponent } from './borrow-and-returm-details/borrow-and-returm-details.component';

 
export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home',component: HomePageComponent},
    {path: 'login',component: LoginPageComponent},
    {path: 'book-catlog',component: BookCatlogComponent},
    {path: 'book-management',component: BookManagementComponent},
    {path: 'borrow-return',component: BorrowReturnComponent},
    {path: 'search-filter',component: SearchFilterComponent},
    {path: 'feedback',component: FeedbackComponent},
    {path: 'welcome',component:WelcomeComponent},
    {path:'forgetpassword',component:ForgetPasswordComponent},
    {path:'register',component:RegisterComponent},
    {path:'admin-dashboard',component:AdminDashboardComponent},
    {path:'borrow-and-returm-details',component:BorrowAndReturmDetailsComponent}
    
];
