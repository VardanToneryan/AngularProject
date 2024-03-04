import { Component, Input, OnInit } from '@angular/core';
import { BlogAllPosts } from '../../models/blogAllPosts';
import { NgStyle } from '@angular/common';
import { RequestService } from '../../services/request.service';
import { environments } from '../../../environments/environments';
import { Authors } from '../..//models/authors';
@Component({
  selector: 'app-blog-all-posts',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './blog-all-posts.component.html',
  styleUrl: './blog-all-posts.component.css'
})
export class BlogAllPostsComponent implements OnInit  {
  featuredPost!: Authors[]
  constructor(public request: RequestService){}

  ngOnInit():void{
    this.request.getData<Authors[]>(`${environments.Authors.get}?_start=8&_limit=9`).subscribe((data)=>{ //////////// ??????????????????????????/
      this.featuredPost = data
    })
  }

  @Input('data') data!: BlogAllPosts;
  @Input('styles') styles!: {};
  @Input('titleStyle') titleStyle!: {};
  @Input('mainBlock') mainBlock!: {};
  @Input('DataStyles') DataStyles!: {};
  @Input('DataType') DataType!: {};
}
