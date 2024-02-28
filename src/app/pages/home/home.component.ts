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

  // testimonials = [
  //   { name: 'Jonathan Vallem', location: 'New York, USA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', profilePicture: 'assets/img/Profilepicture.png' },
  //   { name: 'Floyd Miles', location: 'New York, USA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', profilePicture: 'assets/img/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.png' },
  //   { name: 'Dianne Russell', location: 'New York, USA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', profilePicture: 'assets/img/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.png' },

  // ];
  constructor(public request: RequestService) { }

  posts: AllPosts[] = [];
  categories: Category[] = [];
  authors: Authors[] = [];

  ngOnInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      // Swiper options/configuration here
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
      this.authors = data
      // console.log(data);
    });

  }
  scroll(): void {
    window.scrollTo(0, 0)
  }

  // prevTestimonial() {
  //   if (this.currentIndex > 0) {
  //     this.currentIndex--;
  //   }
  // }

  // nextTestimonial() {
  //   if (this.currentIndex < this.testimonials.length - 1) {
  //     this.currentIndex++;
  //   }
  // }
  nextSlide(): void {
    if (this.swiper) {
      this.swiper.slideNext();
    }
    
  }

  // Event handler for previous button
  prevSlide(): void {
    if (this.swiper) {
      this.swiper.slidePrev();
    }
  }
}

