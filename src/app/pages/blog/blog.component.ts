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



@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule, BlogAllPostsComponent, CommonModule, CategoryComponent, JoinOurTeamComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  constructor(public request: RequestService) { }

  data: BlogAllPosts[] = []
  data2: Category[]= []
  ngOnInit(): void {
    this.request.getData<BlogAllPosts[]>(environments.BlogAllPosts.get).subscribe((data) => {
      this.data = data
    }, (e) => {
      console.log(e);
    })

    this.request.getData<Category[]>(environments.Category.get).subscribe((data)=>{
      this.data2 = data;
    },(e)=>{
      console.log(e);
    })
  }
}
