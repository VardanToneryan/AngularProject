import { Component, OnInit } from '@angular/core';
import { BlogAllPostsComponent } from '../../Components/blog-all-posts/blog-all-posts.component';
import { BlogAllPosts } from "../../models/blogAllPosts";
import { JoinOurTeamComponent } from '../../Components/join-our-team/join-our-team.component';
import { RequestService } from '../../services/request.service';
import { environments } from '../../../environments/environments';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Authors } from '../../models/authors';


@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [BlogAllPostsComponent, JoinOurTeamComponent, CommonModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent implements OnInit {
  blogPosts: BlogAllPosts[] = [];
  id!: string;
  authors!: Authors | undefined

  constructor(public request: RequestService, public activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.request.getData<BlogAllPosts[]>(`${environments.BlogAllPosts.get}/?_start=0&_limit=3`).subscribe((data) => {
      this.blogPosts = data
    }, (e) => {
      console.log(e);
    });
    this.loadAuthors()
  }
  
  loadAuthors() {
    this.request.getData<Authors>(`${environments.Authors.get}/${this.id}`).subscribe(
      (data) => {
        this.authors = data;
      },
      (error) => {
        console.error( error);
      }
    );
  }
  
}
