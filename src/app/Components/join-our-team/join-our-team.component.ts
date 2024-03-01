import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { JoinOurTeam } from '../../models/joinOurTeam';
import { environments } from '../../../environments/environments';

@Component({
  selector: 'app-join-our-team',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './join-our-team.component.html',
  styleUrl: './join-our-team.component.css'
})
export class JoinOurTeamComponent implements OnInit {
  joinOurTeam!: JoinOurTeam[]

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData<JoinOurTeam[]>(`${environments.JoinOurTeam.get}`).subscribe((data) => {
      this.joinOurTeam = data;
    })
  }
}
