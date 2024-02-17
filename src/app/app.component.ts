import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from './Components/nav/nav.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule, FooterComponent,NavComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './Components/all-posts/all-posts.component.css']
})
export class AppComponent {
  title = 'Angular';

}
