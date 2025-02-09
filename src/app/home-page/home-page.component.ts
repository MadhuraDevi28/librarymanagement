import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { UserHeaderComponent } from "../user-header/user-header.component";

@Component({
  selector: 'app-home-page',
  standalone:true,
  imports: [ButtonModule, UserHeaderComponent],

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {



}
