import { Component, OnInit } from '@angular/core';
import { BlogAllPostsComponent } from '../../Components/blog-all-posts/blog-all-posts.component';
import { BlogAllPosts } from "../../models/blogAllPosts";
import { Category } from '../../models/category';
import { CategoryComponent } from '../../Components/category/category.component';
import { RequestService } from '../../services/request.service';
import { environments } from '../../../environments/environments';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [BlogAllPostsComponent, CategoryComponent],
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css', '../../Components/blog-all-posts/blog-all-posts.component.css']
})

export class CategoryPageComponent implements OnInit {

  blogPosts: BlogAllPosts[] = [];
  category: Category[] = [];
  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData<BlogAllPosts[]>(environments.BlogAllPosts.get).subscribe((data) => {
      this.blogPosts = data.filter(blogPosts => blogPosts.id === 1 || blogPosts.id === 2 || blogPosts.id === 3 || blogPosts.id === 4)
    }, (e) => {
      console.log(e);
    })

    this.request.getData<Category[]>(environments.Category.get).subscribe((data) => {
      this.category = data
    })

  }
}
