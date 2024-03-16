import { Component, OnInit } from '@angular/core';
import { BlogAllPostsComponent } from '../../Components/blog-all-posts/blog-all-posts.component';
import { BlogAllPosts } from "../../models/blogAllPosts";
import { Category } from '../../models/category';
import { CategoryComponent } from '../../Components/category/category.component';
import { RequestService } from '../../services/request.service';
import { environments } from '../../../environments/environments';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [BlogAllPostsComponent, CategoryComponent, RouterLink],
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css', '../../Components/blog-all-posts/blog-all-posts.component.css']
})

export class CategoryPageComponent implements OnInit {

  blogPosts!: BlogAllPosts[];
  category!: Category[];
  oneCategory!: Category;
  id!: string;
  array: string[] = []
  constructor(public request: RequestService, public activateRoutes: ActivatedRoute, private router: Router) {
    this.id = this.activateRoutes.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadCategory();
    this.loadBlogAllPosts();
  }

  loadBlogAllPosts(): void {
    this.request.getData<BlogAllPosts[]>(`${environments.BlogAllPosts.get}`).subscribe((data) => {
      this.blogPosts = data;
    }, (e) => {
      console.log(e);
    });
  }

  loadCategory(): void {
    this.request.getData<Category[]>(`${environments.Category.get}`).subscribe((data) => {
      this.category = data;
    })
    this.request.getData<Category>(`${environments.Category.get}/${this.id}`).subscribe((data) => {
      this.oneCategory = data;
    })
  }
}
