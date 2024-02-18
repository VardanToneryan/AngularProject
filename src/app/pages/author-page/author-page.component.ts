import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { environments } from '../../../environments/environments';
import { BlogAllPosts } from '../../models/blogAllPosts';
import { BlogAllPostsComponent } from '../../Components/blog-all-posts/blog-all-posts.component';

@Component({
  selector: 'app-author-page',
  standalone: true,
  imports: [BlogAllPostsComponent],
  templateUrl: './author-page.component.html',
  styleUrl: './author-page.component.css'
})
export class AuthorPageComponent implements OnInit {
  data: BlogAllPosts[] = [];

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData<BlogAllPosts[]>(environments.BlogAllPosts.get).subscribe((data) => {
      this.data = data;
    }, (e) => {
      console.log(e);
    })
  }
}
