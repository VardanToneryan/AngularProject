import { Component } from '@angular/core';
import { BlogAllPostsComponent } from '../../Components/blog-all-posts/blog-all-posts.component';
import { BlogAllPosts } from "../../models/blogAllPosts";
import { JoinOurTeamComponent } from '../../Components/join-our-team/join-our-team.component';
@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [BlogAllPostsComponent,JoinOurTeamComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  blogAllPosts: BlogAllPosts[] = [
    {
      id: '1',
      image: 'assets/img/two-women-in-front-of-dry-erase-board-1181533.png',
      header: 'By <span>John Doe</span> l Aug 23, 2021 ',
      text_1: 'A UX Case Study Creating a Studious Environment for Students: ',
      text_2: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    }
  ]
}
