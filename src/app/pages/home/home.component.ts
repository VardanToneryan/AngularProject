import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AllPosts } from '../../models/allPosts';
import { Category } from "../../models/category";
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../Components/nav/nav.component';
import { AllPostsComponent } from '../../Components/all-posts/all-posts.component';
import { CategoryComponent } from '../../Components/category/category.component';
import { AuthorsComponent } from '../../Components/authors/authors.component';
import { Authors } from '../..//models/authors';
import { JoinOurTeamComponent } from '../../Components/join-our-team/join-our-team.component';
import { FooterComponent } from '../../Components/footer/footer.component';
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
export class HomeComponent {
  allPosts: AllPosts[] = [
    {
      id: '1',
      text_1: 'l Aug 23, 2021',
      text_2: '8 Figma design systems that you can download for free today.',
      text_3: 'John Deo'
    },
    {
      id: '2',
      text_1: 'l Aug 23, 2021',
      text_2: '8 Figma design systems that you can download for free today.',
      text_3: 'John Deo',
    },
    {
      id: '3',
      text_1: 'l Aug 23, 2021',
      text_2: '8 Figma design systems that you can download for free today.',
      text_3: 'John Deo',
    },
    {
      id: '4',
      text_1: 'l Aug 23, 2021',
      text_2: '8 Figma design systems that you can download for free today.',
      text_3: 'John Deo',
    }
  ];

  category: Category[] = [
    {
      id: '1',
      image: 'assets/img/icon1.png',
      header: 'Business',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id: '2',
      image: 'assets/img/icon2.png',
      header: 'Startup',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id: '3',
      image: 'assets/img/icon3.png',
      header: 'Economy',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id: '4',
      image: 'assets/img/icon4.png',
      header: 'Technology',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
  ];

  authors: Authors[] = [
    {
      image: 'assets/img/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.png',
      header: 'Dianne Russell',
      text: 'Content Writer @Company',
      icone_1: 'assets/img/fb.png',
      icone_2: 'assets/img/tw.png',
      icone_3: 'assets/img/insta.png',
      icone_4: 'assets/img/LI.png',
    },
    {
      image: 'assets/img/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.png',
      header: 'Dianne Russell',
      text: 'Content Writer @Company',
      icone_1: 'assets/img/fb.png',
      icone_2: 'assets/img/tw.png',
      icone_3: 'assets/img/insta.png',
      icone_4: 'assets/img/LI.png',
    },
    {
      image: 'assets/img/fashion-woman-cute-shoes-5704849.png',
      header: 'Dianne Russell',
      text: 'Content Writer @Company',
      icone_1: 'assets/img/fb.png',
      icone_2: 'assets/img/tw.png',
      icone_3: 'assets/img/insta.png',
      icone_4: 'assets/img/LI.png',
    },
    {
      image: 'assets/img/content-baker-with-delicious-puff-in-cafeteria-6205509.png',
      header: 'Dianne Russell',
      text: 'Content Writer @Company',
      icone_1: 'assets/img/fb.png',
      icone_2: 'assets/img/tw.png',
      icone_3: 'assets/img/insta.png',
      icone_4: 'assets/img/LI.png',
    }
  ];
}
