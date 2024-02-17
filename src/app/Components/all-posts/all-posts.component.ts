import { Component, Input } from '@angular/core';
import { AllPosts } from '../../models/allPosts';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-all-posts',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.css'
})
export class AllPostsComponent {
  // @Input('allPosts') allPosts!: AllPosts;
  @Input('data') data: any; 
  
  scroll(){
    window.scrollTo(0,0)
  }
}
