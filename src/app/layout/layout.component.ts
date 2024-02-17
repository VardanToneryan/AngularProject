import { Component } from '@angular/core';
import { NavComponent } from '../Components/nav/nav.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavComponent,FooterComponent,RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
