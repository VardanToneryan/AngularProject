import { Component, Input } from '@angular/core';
import { BlogAllPosts } from '../../models/blogAllPosts';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-blog-all-posts',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './blog-all-posts.component.html',
  styleUrl: './blog-all-posts.component.css'
})
export class BlogAllPostsComponent {
  @Input('data') data!: BlogAllPosts;
  // @Input('styles') styles: any = {};
  @Input('styles') styles!: {};
  @Input('titleStyle') titleStyle!: {};

}
