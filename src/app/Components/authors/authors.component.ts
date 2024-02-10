import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  @Input('data') data: any; 
}
