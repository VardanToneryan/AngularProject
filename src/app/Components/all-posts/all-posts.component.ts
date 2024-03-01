import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AllPosts } from '../../models/allPosts';


@Component({
  selector: 'app-all-posts',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.css'
})
export class AllPostsComponent {
  @Input('allPosts') allPosts!: AllPosts;
}
