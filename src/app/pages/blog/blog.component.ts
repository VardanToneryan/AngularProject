import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogAllPostsComponent } from '../../Components/blog-all-posts/blog-all-posts.component';
import { BlogAllPosts } from "../../models/blogAllPosts";
import { Category } from "../../models/category";
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../../Components/category/category.component';
import { JoinOurTeamComponent } from '../../Components/join-our-team/join-our-team.component';
import { RequestService } from '../../services/request.service';
import { environments } from '../../../environments/environments';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    NgbPaginationModule,
    RouterModule,
    BlogAllPostsComponent,
    CommonModule,
    CategoryComponent,
    JoinOurTeamComponent,
    MatPaginatorModule,
    NgxPaginationModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  BlogAllPosts: BlogAllPosts[] = []
  Category: Category[] = []
  featuredPost!: BlogAllPosts;
  p: number = 1;
  itemsPerPage: number = 5

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.LoadBlogAllPosts();
    this.LoadCategory();
    this.checkScreenWidth()
  }

  LoadBlogAllPosts() {
    this.request.getData<BlogAllPosts[]>(`${environments.BlogAllPosts.get}`).subscribe((data) => {
      this.BlogAllPosts = data;
    }, (e) => {
      console.log(e);
    })
    this.request.getData<BlogAllPosts>(`${environments.BlogAllPosts.get}/9`).subscribe((featuredPost) => {
      this.featuredPost = featuredPost;
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

  checkScreenWidth() {
    if (window.innerWidth <= 800) {
      this.itemsPerPage = 1;
    }else{
      this.itemsPerPage = 5
    }
  }
}
