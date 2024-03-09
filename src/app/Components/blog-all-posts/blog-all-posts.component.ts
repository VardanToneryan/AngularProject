import { Component, Input, OnInit } from '@angular/core';
import { BlogAllPosts } from '../../models/blogAllPosts';
import { NgStyle } from '@angular/common';
import { RequestService } from '../../services/request.service';
import { environments } from '../../../environments/environments';
import { Authors } from '../..//models/authors';
import { ActivatedRoute, RouterModule } from '@angular/router';
@Component({
  selector: 'app-blog-all-posts',
  standalone: true,
  imports: [NgStyle, RouterModule],
  templateUrl: './blog-all-posts.component.html',
  styleUrl: './blog-all-posts.component.css'
})
export class BlogAllPostsComponent implements OnInit {
  featuredPost!: Authors;
  blogposts!: BlogAllPosts;

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData<Authors>(`${environments.Authors.get}/5`).subscribe((data) => {
      this.featuredPost = data
    })
  }

  @Input('BlogAllPosts') BlogAllPosts!: BlogAllPosts;
  @Input('styles') styles!: {};
  @Input('titleStyle') titleStyle!: {};
  @Input('mainBlock') mainBlock!: {};
  @Input('DataStyles') DataStyles!: {};
  @Input('DataType') DataType!: {};
}
