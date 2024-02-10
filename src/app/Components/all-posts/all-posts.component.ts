import { Component, Input } from '@angular/core';
import { AllPosts } from '../../models/allPosts';

@Component({
  selector: 'app-all-posts',
  standalone: true,
  imports: [],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.css'
})
export class AllPostsComponent {
  // @Input('allPosts') allPosts!: AllPosts;
  @Input('data') data: any; 
}
