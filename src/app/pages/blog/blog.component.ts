import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogAllPostsComponent } from '../../Components/blog-all-posts/blog-all-posts.component';
import { BlogAllPosts } from "../../models/blogAllPosts";
import { Category } from "../../models/category";
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../../Components/category/category.component';
import { JoinOurTeamComponent } from '../../Components/join-our-team/join-our-team.component';
import { RequestService } from '../../services/request.service';
import { environments } from '../../../environments/environments';
import { Authors } from '../../models/authors';
import { MatPaginatorModule } from '@angular/material/paginator';



@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule, BlogAllPostsComponent, CommonModule, CategoryComponent, JoinOurTeamComponent, MatPaginatorModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  BlogAllPosts: BlogAllPosts[] = []
  Category: Category[] = []
  featuredPost!: Authors[];
  currentPage = 0;
  limitIndex = 5;
  totalItems!: number;

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.LoadBlogAllPosts()
    this.LoadCategory()
    this.LoadFeaturedPost()
  }

  LoadBlogAllPosts() {
    this.request.getData<BlogAllPosts[]>(`${environments.BlogAllPosts.get}?_start=0&_limit=5`).subscribe((data) => {
      this.BlogAllPosts = data
    }, (e) => {
      console.log(e);
    })
  }
  LoadCategory() {
    this.request.getData<Category[]>(environments.Category.get).subscribe((data) => {
      this.Category = data;
    }, (e) => {
      console.log(e);
    })
  }
  LoadFeaturedPost() {
    this.request.getData<Authors[]>(`${environments.Authors.get}?_start=8&_end=9`).subscribe((data) => {
      this.featuredPost = data
    })
  }
}
