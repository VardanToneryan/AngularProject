import { Component } from '@angular/core';
import { AuthorsComponent } from '../../Components/authors/authors.component';
import { Authors } from "../../models/authors";
import { JoinOurTeamComponent } from '../../Components/join-our-team/join-our-team.component';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AuthorsComponent,JoinOurTeamComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  authors: Authors[] = [
    {
      id: '1',
      image: 'assets/img/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.png',
      header: 'Floyd Miles',
      text: 'Content Writer @Company',
      icone_1: 'assets/img/fb.png',
      icone_2: 'assets/img/tw.png',
      icone_3: 'assets/img/insta.png',
      icone_4: 'assets/img/LI.png',
    },
    {
      id: '2',
      image: 'assets/img/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.png',
      header: 'Dianne Russell',
      text: 'Content Writer @Company',
      icone_1: 'assets/img/fb.png',
      icone_2: 'assets/img/tw.png',
      icone_3: 'assets/img/insta.png',
      icone_4: 'assets/img/LI.png',
    },
    {
      id: '3',
      image: 'assets/img/fashion-woman-cute-shoes-5704849.png',
      header: 'Jenny Wilson',
      text: 'Content Writer @Company',
      icone_1: 'assets/img/fb.png',
      icone_2: 'assets/img/tw.png',
      icone_3: 'assets/img/insta.png',
      icone_4: 'assets/img/LI.png',
    },
    {
      id: '4',
      image: 'assets/img/content-baker-with-delicious-puff-in-cafeteria-6205509.png',
      header: 'Leslie Alexander',
      text: 'Content Writer @Company',
      icone_1: 'assets/img/fb.png',
      icone_2: 'assets/img/tw.png',
      icone_3: 'assets/img/insta.png',
      icone_4: 'assets/img/LI.png',
    },
    
    {
      id:'5',
      image: 'assets/img/man-in-whitebutton-up-shirt-wearing-black-framed-eyeglasses-7562313.png',
      header: 'Guy Howkins',
      text: 'Content Writer @Company',
      icone_1: 'assets/img/fb.png',
      icone_2: 'assets/img/tw.png',
      icone_3: 'assets/img/insta.png',
      icone_4: 'assets/img/LI.png',
    },
    {
      id:'6',
      image: 'assets/img/woman-in-blackand-black-striped-shirt-wearing-black-sunglasses-3671083.png',
      header: 'Eleanor Pena',
      text: 'Content Writer @Company',
      icone_1: 'assets/img/fb.png',
      icone_2: 'assets/img/tw.png',
      icone_3: 'assets/img/insta.png',
      icone_4: 'assets/img/LI.png',
    },
    {
      id:'7',
      image: 'assets/img/content-unshaven-man-covering-eye-with-yellow-flower-5262459.png',
      header: 'Robert Fox',
      text: 'Content Writer @Company',
      icone_1: 'assets/img/fb.png',
      icone_2: 'assets/img/tw.png',
      icone_3: 'assets/img/insta.png',
      icone_4: 'assets/img/LI.png',
    },
    {
      id:'8',
      image: 'assets/img/cheerful-young-ethnic-male-millennial-standing-near-stone-wall-and-smiling-6147118.png',
      header: 'GJacob Jones',
      text: 'Content Writer @Company',
      icone_1: 'assets/img/fb.png',
      icone_2: 'assets/img/tw.png',
      icone_3: 'assets/img/insta.png',
      icone_4: 'assets/img/LI.png',
    },
  ];
}
