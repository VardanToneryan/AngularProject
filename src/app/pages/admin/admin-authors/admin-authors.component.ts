// import { Component, Input, OnInit } from '@angular/core';
// import { Authors } from '../../../models/authors';
// import { MatTableModule } from '@angular/material/table';
// import { RequestService } from '../../../services/request.service';
// import { environments } from '../../../../environments/environments';
// import { CdkTableDataSourceInput } from '@angular/cdk/table';
// import { MatTableDataSource } from '@angular/material/table';

// @Component({
//   selector: 'app-admin-authors',
//   standalone: true,
//   imports: [MatTableModule],
//   templateUrl: './admin-authors.component.html',
//   styleUrl: './admin-authors.component.css'
// })
// export class AdminAuthorsComponent implements OnInit {

//   // authors!: Authors
//   authors!: MatTableDataSource<Authors>
//     displayedColumns: string[] = ['image', 'name', 'text', 'title', 'Edit', 'Delete'];
//   displayedColumnsASecond: string[] = ['categoryeIcon', 'category', 'mainImage', 'date', 'Edit', 'Delete'];
//   displayedColumnsAThird: string[] = ['description', 'featuredPost', 'slogan', 'Edit', 'Delete'];
//   displayedColumnsAFourth: string[] = ['about_Author_Title', 'about_Author_description_1', 'Edit', 'Delete'];
//   displayedColumnsAFivth: string[] = ['about_Author_Title2', 'about_Author_description_2', 'Edit', 'Delete'];
//   displayedColumnsASixth: string[] = ['about_Author_Title3', 'about_Author_description_3', 'Edit', 'Delete'];
//   displayedColumnsASeventh: string[] = ['about_Author_description_4', 'about_Author_description_5', 'Edit', 'Delete'];
//   displayedColumnsAEight: string[] = ['list_1', 'list_2', 'list_3', 'Edit', 'Delete'];

//   constructor(public request: RequestService) { }

//   ngOnInit(): void {
//     this.loadauthors();
//   }


//   loadauthors(): void {
//     this.request.getData<Authors[]>(`&{environments.Authors.get}/1`).subscribe((data) => {
//       this.authors = new MatTableDataSource(data)
//       console.log(this.authors);
      
//     }, (e) => {
//       console.log(e);
//     })
//   }

// }

import { Component, Input, OnInit } from '@angular/core';
import { Authors } from '../../../models/authors';
import { MatTableModule } from '@angular/material/table';
import { RequestService } from '../../../services/request.service';
import { environments } from '../../../../environments/environments';
import { MatTableDataSource } from '@angular/material/table'; // Correct import

@Component({
  selector: 'app-admin-authors',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './admin-authors.component.html',
  styleUrl: './admin-authors.component.css'
})
export class AdminAuthorsComponent implements OnInit {

  // authors: Authors[] = []
  authors!: MatTableDataSource<Authors>;
  displayedColumns: string[] = ['image', 'name', 'text', 'title', 'Edit', 'Delete'];
  displayedColumnsASecond: string[] = ['categoryeIcon', 'category', 'mainImage', 'date', 'Edit', 'Delete'];
  displayedColumnsAThird: string[] = ['description', 'featuredPost', 'slogan', 'Edit', 'Delete'];
  displayedColumnsAFourth: string[] = ['about_Author_Title', 'about_Author_description_1', 'Edit', 'Delete'];
  displayedColumnsAFivth: string[] = ['about_Author_Title2', 'about_Author_description_2', 'Edit', 'Delete'];
  displayedColumnsASixth: string[] = ['about_Author_Title3', 'about_Author_description_3', 'Edit', 'Delete'];
  displayedColumnsASeventh: string[] = ['about_Author_description_4', 'about_Author_description_5', 'Edit', 'Delete'];
  displayedColumnsAEight: string[] = ['list_1', 'list_2', 'list_3', 'Edit', 'Delete'];

  constructor(public request: RequestService) {}

  ngOnInit(): void {
    this.loadauthors();
  }

  loadauthors(): void {
    // this.request.getData<Authors[]>(`&{environments.Authors.get}/1`).subscribe((data) => {
    //   this.authors = data;
    //   console.log('Authors data:', this.authors);
    // }, (e) => {
    //   console.log(e);
    // })
    this.request.getData<Authors[]>(`${environments.Authors.get}`).subscribe(
      (data) => {
        // this.authors = new MatTableDataSource(data);
        this.authors = new MatTableDataSource(data);
        console.log(this.authors);
      },
      (error) => {
        console.error('Error fetching authors:', error);
      }
    );
    
  }
}
