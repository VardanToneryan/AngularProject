import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-all-posts',
  standalone: true,
  imports: [],
  templateUrl: './blog-all-posts.component.html',
  styleUrl: './blog-all-posts.component.css'
})
export class BlogAllPostsComponent {
  @Input('data') data: any;
}
