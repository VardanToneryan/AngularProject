import { Component, OnInit } from '@angular/core';
import { AuthorsComponent } from '../../Components/authors/authors.component';
import { JoinOurTeamComponent } from '../../Components/join-our-team/join-our-team.component';
import { RequestService } from '../../services/request.service';
import { environments } from '../../../environments/environments';
import { Authors } from '../../models/authors';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AuthorsComponent,JoinOurTeamComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent  implements OnInit {

  data: Authors[] = [];


  constructor(public request: RequestService){}

  ngOnInit(): void{
    this.request.getData<Authors[]>(`${environments.Authors.get}?_start=0&_limit=8`).subscribe((data)=>{
      this.data = data;
    },(e)=>{
      console.log(e);
    })
  }
}
