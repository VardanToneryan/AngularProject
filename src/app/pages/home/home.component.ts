import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../Components/nav/nav.component';
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
import { Swiper } from 'swiper';
import 'swiper/swiper-bundle.css';
import { BlogAllPostsComponent } from '../../Components/blog-all-posts/blog-all-posts.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NavComponent,
    CommonModule,
    CategoryComponent,
    AuthorsComponent,
    JoinOurTeamComponent,
    FooterComponent,
    BlogAllPostsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


export class HomeComponent implements OnInit {
  swiper!: Swiper | undefined;
  currentIndex: number = 0;
  prevButtonWidth: string = '42px';
  BlogAllPosts: BlogAllPosts[] = [];
  categories: Category[] = [];
  authors: Authors[] = [];
  author10!: Authors;
  featuredPost!: Authors;
  allAuthors: Authors[] = [];;

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.swiper = new Swiper('.swiper-container', {});
    this.loadCategory()
    this.loadAllPosts();
    this.loadAuthors();
  }

  loadCategory() {
    this.request.getData<Category[]>(environments.Category.get).subscribe((data) => {
      this.categories = data;
    }, (e) => {
      console.log(e);
    })
  }

  loadAllPosts() {
    this.request.getData<BlogAllPosts[]>(environments.BlogAllPosts.get).subscribe((BlogAllPosts) => {
      this.BlogAllPosts = BlogAllPosts;
    }, (e) => {
      console.log(e);
    })
  }

  loadAuthors() {
    this.request.getData<Authors[]>(`${environments.Authors.get}?_start=0&_limit=4`).subscribe((data) => {
      this.authors = data;
      this.request.getData<Authors>(`${environments.Authors.get}/10`).subscribe((data) => {
        this.author10 = data;
      });
      this.request.getData<Authors>(`${environments.Authors.get}/9`).subscribe((featuredPost) => {
        this.featuredPost = featuredPost;
      })
      this.request.getData<Authors[]>(environments.Authors.get).subscribe((allAuthors) => {
        this.allAuthors = allAuthors;
      })
    });
  }

  nextSlide(): void {
    if (this.swiper) {
      this.swiper.slideNext();
    }
  }

  prevSlide(): void {
    if (this.swiper) {
      this.swiper.slidePrev();
    }
  }
}

