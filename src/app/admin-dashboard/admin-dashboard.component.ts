import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin/admin-header/admin-header.component';
@Component({
  selector: 'app-admin-dashboard',
  imports: [AdminHeaderComponent],
  standalone:true,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

}
