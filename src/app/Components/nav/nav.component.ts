import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  scrollDown():void{
    window.scrollTo(0,7000)
  }
  goUp():void{
    window.scrollTo(0,0)
  }
}
