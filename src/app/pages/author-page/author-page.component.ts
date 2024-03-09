import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { environments } from '../../../environments/environments';
import { BlogAllPosts } from '../../models/blogAllPosts';
import { BlogAllPostsComponent } from '../../Components/blog-all-posts/blog-all-posts.component';
import { Authors } from '../../models/authors';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-author-page',
  standalone: true,
  imports: [BlogAllPostsComponent,RouterModule],
  templateUrl: './author-page.component.html',
  styleUrl: './author-page.component.css'
})
export class AuthorPageComponent implements OnInit {
  BlogAllPosts: BlogAllPosts[] = [];
  author!: Authors 
  id!: Authors
  constructor(public request: RequestService, public activateRoute: ActivatedRoute) {
    this.id = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadBlogAllPosts();
    this.loadAuthor();
  }

  loadBlogAllPosts() {
    this.request.getData<BlogAllPosts[]>(`${environments.BlogAllPosts.get}`).subscribe((data) => {
      this.BlogAllPosts = data;
    }, (e) => {
      console.log(e);
    })
  }
  loadAuthor() {
    this.request.getData<Authors>(`${environments.Authors.get}/${this.id}`).subscribe((author) => {
      this.author = author
    }, (e) => {
      console.log(e); 
    })
  }
}
