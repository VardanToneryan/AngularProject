import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from '../../../services/request.service';
import { Category } from '../../../models/category';
import { environments } from '../../../../environments/environments';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-categories',
  standalone: true,
  imports: [RouterModule, MatTableModule],
  templateUrl: './admin-categories.component.html',
  styleUrl: './admin-categories.component.css'
})
export class AdminCategoriesComponent implements OnInit {

  category!: Category[]
  displayedColumns: string[] = ['image', 'title', 'description', 'Edit', 'Delete'];

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.loadCategory()
  }


  loadCategory(): void {
    this.request.getData<Category[]>(environments.Category.get).subscribe((data) => {
      this.category = data
    }, (e) => {
      console.log(e);
    })
  }

}
