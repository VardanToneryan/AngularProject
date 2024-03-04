import { Component, Input, OnInit, input } from '@angular/core';
import { BlogAllPosts } from '../../../models/blogAllPosts';
import { RequestService } from '../../../services/request.service';
import { environments } from '../../../../environments/environments';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-admin-blog-all-posts',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './admin-blog-all-posts.component.html',
  styleUrl: './admin-blog-all-posts.component.css'
})
export class AdminBlogAllPostsComponent implements OnInit {
  allposts!: BlogAllPosts[]
  displayedColumns: string[] = ['image', 'type', 'date', 'title','description','Edit','Delete'];

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.loadAllPosts();
  }

  loadAllPosts(): void {
    this.request.getData<BlogAllPosts[]>(environments.BlogAllPosts.get).subscribe((data) => {
      this.allposts = data;
    }, (e) => {
      console.log(e);
    })
  }

}
