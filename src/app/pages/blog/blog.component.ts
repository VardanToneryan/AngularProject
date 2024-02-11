import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogAllPostsComponent } from '../../Components/blog-all-posts/blog-all-posts.component';
import { BlogAllPosts } from "../../models/blogAllPosts";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule, BlogAllPostsComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogAllPosts: BlogAllPosts[] = [
    {
      id: '1',
      image: 'assets/img/two-women-in-front-of-dry-erase-board-1181533.png',
      header: 'STARTUP',
      text_1: 'Design tips for designers that cover everything you need ',
      text_2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      id: '2',
      image: 'assets/img/photo-of-people-doing-handshakes-3183197.png',
      header: 'STARTUP',
      text_1: 'Design tips for designers that cover everything you need ',
      text_2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      id: '3',
      image: 'assets/img/photo-of-woman-looking-at-man-3183173.png',
      header: 'STARTUP',
      text_1: 'Design tips for designers that cover everything you need ',
      text_2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      id: '4',
      image: 'assets/img/photo-of-people-walking-on-hallway-3182811.png',
      header: 'STARTUP',
      text_1: 'Design tips for designers that cover everything you need ',
      text_2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      id: '5',
      image: 'assets/img/two-women-in-front-of-dry-erase-board-1181533.png',
      header: 'STARTUP',
      text_1: 'Design tips for designers that cover everything you need ',
      text_2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
  ];
}