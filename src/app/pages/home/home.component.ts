import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
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
import { Swiper } from 'swiper';
import 'swiper/swiper-bundle.css';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NavComponent,
    CommonModule,
    AllPostsComponent,
    CategoryComponent,
    AuthorsComponent,
    JoinOurTeamComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


export class HomeComponent implements OnInit {
  swiper!: Swiper | undefined;
  currentIndex: number = 0;
  prevButtonWidth: string = '42px';
  posts: AllPosts[] = [];
  categories: Category[] = [];
  authors: Authors[] = [];
  featuredPost: Authors[] = [];

  constructor(public request: RequestService){}

  ngOnInit(): void {
    this.swiper = new Swiper('.swiper-container', {
    });

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

    this.request.getData<Authors[]>(`${environments.Authors.get}?_start=0&_limit=4`).subscribe((data) => {
      this.authors = data;
      // this.featuredAuthor = this.authors[3];
    });

    this.request.getData<Authors[]>(`${environments.Authors.get}?_start=8&_limit=9`).subscribe((data)=>{ //////////// ??????????????????????????/
      this.featuredPost = data
    })

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

