import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AdminCategoriesComponent } from '../pages/admin/admin-categories/admin-categories.component';
import { Category } from '../models/category';
import { environments } from '../../environments/environments';
import { RequestService } from '../services/request.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Authors } from '../models/authors';
import { BlogAllPosts } from '../models/blogAllPosts';
import { CommonModule } from '@angular/common';
import { AdminAuthorsComponent } from '../pages/admin/admin-authors/admin-authors.component';
import { AdminBlogAllPostsComponent } from '../pages/admin/admin-blog-all-posts/admin-blog-all-posts.component';


@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterModule, MatButtonModule, AdminAuthorsComponent, AdminBlogAllPostsComponent, AdminCategoriesComponent, MatTableModule, CommonModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
  id!: number;

  constructor(public activatedRoute: ActivatedRoute){
    this.id = this.activatedRoute.snapshot.params['id']
  }

  clickCategory: boolean = false;
  clickAuthor: boolean = false;
  clickAllposts: boolean = false;

  toggleCategory(): void {
    this.clickCategory = true;
    this.clickAuthor = false;
    this.clickAllposts = false;
  }

  toggleAuthor(): void {
    this.clickAuthor = true;
    this.clickCategory = false;
    this.clickAllposts = false;
  }

  toggleAllposts(): void {
    this.clickAllposts = true;
    this.clickAuthor = false;
    this.clickCategory = false;
  }
}

