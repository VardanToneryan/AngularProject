import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../Components/nav/nav.component';
import { AllPostsComponent } from '../../Components/all-posts/all-posts.component';
import { AllPosts } from '../../models/allPosts';
import { CategoryComponent } from '../../Components/category/category.component';
import { Category } from "../../models/category";
import { AuthorsComponent } from '../../Components/authors/authors.component';
import { Authors } from '../..//models/authors';
import { JoinOurTeamComponent } from '../../Components/join-our-team/join-our-team.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { BlogAllPosts } from '../../models/blogAllPosts';
import { RequestService } from '../../services/request.service';
import { NgModel } from '@angular/forms';
import { environments } from '../../../environments/environments';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterModule,
    NavComponent, CommonModule,
    AllPostsComponent,
    CategoryComponent, AuthorsComponent,
    JoinOurTeamComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(public request: RequestService) { }

  posts: AllPosts[] = [];
  categories: Category[] = [];
  authors: Authors[] = [];

  ngOnInit(): void {
    this.request.getData<AllPosts[]>(environments.AllPosts.get).subscribe((data) => {
      this.posts = data;
    }, (e) => {
      console.log(e);
    })

    this.request.getData<Category[]>(environments.Category.get).subscribe((data) => {
      this.categories = data;
    }, (e) => {
      console.log(e);
    })
    this.request.getData<Authors[]>(environments.Authors.get).subscribe((data) => {
      this.authors = data.filter(author => author.id === 1 || author.id === 2 || author.id === 3 || author.id === 4);
    });

  }
  scroll(): void {
    window.scrollTo(0, 0)
  }
}
