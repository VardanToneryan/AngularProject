import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from '../../../services/request.service';
import { Category } from '../../../models/category';
import { environments } from '../../../../environments/environments';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-categories',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatIconModule, MatSelectModule, FormsModule],
  templateUrl: './admin-categories.component.html',
  styleUrl: './admin-categories.component.css'
})
export class AdminCategoriesComponent implements OnInit {
  displayedColumns: string[] = ['image', 'title', 'description', 'Edit', 'Delete','Add'];

  category!: Category[]
  formDisplay: boolean = false;
  form!: FormGroup;
  selectedId!: string | number
  selectedElement!: Category;

  constructor(public request: RequestService, public fb: FormBuilder) {
    this.form = this.fb.group({
      image: ['', Validators.required],
      title: ['', [Validators.required, Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.maxLength(100)]]
    })
  }

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

  edit(category: Category): void {
    if (this.form.valid) {
      let updatedUser = {
        "image": this.form.get('image')?.value,
        "title": this.form.get('title')?.value,
        "description": this.form.get('description')?.value,
      }

      this.request.editData<Category>(`${environments.Category.put}/${this.selectedId}`, this.form.value).subscribe((data) => {
        this.loadCategory();
      }, (e) => {
        console.log(e);
      })
      this.formDisplay = false
      this.form.reset();
    }
  }


  editButton(category: Category) {
    this.selectedElement = category;

    this.formDisplay = true;
    this.selectedId = category.id;
    this.form.patchValue({
      image: category.image,
      title: category.title,
      description: category.description
    });
  }

  deleteButton(category: Category) {
    this.selectedId = category.id;
    if (confirm('Are you sure you want to delete this')) {
      this.request.deleteData<Category>(`${environments.Category.delete}/${this.selectedId}`).subscribe((data) => {
        this.loadCategory();
      }, (e) => {
        console.log(e);
      })
    }
  }
  addButton() {
    this.formDisplay = true
    this.form.reset()
  }

  addData() {
    if (this.form.valid) {
      let addUser = {
        "image": this.form.get("image")?.value,
        "title": this.form.get("title")?.value,
        "description": this.form.get("description")?.value,
      }

      this.request.postData(`${environments.Category.post}`, addUser).subscribe((data) => {
        console.log('added');
        this.loadCategory();
      }, (e) => {
        console.log(e);
      })
      this.formDisplay = false
    }
  }
}
