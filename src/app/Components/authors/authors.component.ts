import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Authors } from '../../models/authors';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  @Input('item') item!: Authors;
}
