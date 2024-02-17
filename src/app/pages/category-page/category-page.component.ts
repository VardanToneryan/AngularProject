import { Component } from '@angular/core';
import { BlogAllPostsComponent } from '../../Components/blog-all-posts/blog-all-posts.component';
import { BlogAllPosts } from "../../models/blogAllPosts";
import { Category } from '../../models/category';
import { CategoryComponent } from '../../Components/category/category.component';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [BlogAllPostsComponent,CategoryComponent],
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css', '../../Components/blog-all-posts/blog-all-posts.component.css']
})

export class CategoryPageComponent {
  blogAllPosts: BlogAllPosts[] =[
    {
      id: '1',
      image: 'assets/img/two-women.png',
      header: 'STARTUP',
      text_1: 'Design tips for designers that cover everything you need ',
      text_2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      id: '2',
      image: 'assets/img/two-women.png',
      header: 'STARTUP',
      text_1: 'Design tips for designers that cover everything you need ',
      text_2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      id: '3',
      image: 'assets/img/two-women.png',
      header: 'STARTUP',
      text_1: 'Design tips for designers that cover everything you need ',
      text_2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      id: '4',
      image: 'assets/img/two-women.png',
      header: 'STARTUP',
      text_1: 'Design tips for designers that cover everything you need ',
      text_2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat non proident.',
    }, 
  ]

  category: Category[] = [
    {
      id: '1',
      image: 'assets/img/icon1.png',
      header: 'Business',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id: '2',
      image: 'assets/img/icon2.png',
      header: 'Startup',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id: '3',
      image: 'assets/img/icon3.png',
      header: 'Economy',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id: '4',
      image: 'assets/img/icon4.png',
      header: 'Technology',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
  ];
}
