import { Component, Input, OnInit, input } from '@angular/core';
import { BlogAllPosts } from '../../../models/blogAllPosts';
import { RequestService } from '../../../services/request.service';
import { environments } from '../../../../environments/environments';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-blog-all-posts',
  standalone: true,
  imports: [CommonModule, MatTableModule,MatButtonModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatDividerModule,MatIconModule,MatSelectModule,FormsModule],
  templateUrl: './admin-blog-all-posts.component.html',
  styleUrl: './admin-blog-all-posts.component.css'
})
export class AdminBlogAllPostsComponent implements OnInit {
  allposts!: BlogAllPosts[]
  displayedColumns: string[] = ['image', 'type', 'date', 'title','description','Edit','Delete','Add'];
  form!: FormGroup;
  selectedId!: string | number
  formDisplay: boolean = false;
  selectedElement!: BlogAllPosts;


  constructor(public request: RequestService, public fb: FormBuilder) { 
    this.form = this.fb.group({
      image: ['', Validators.required],
      type: ['', [Validators.required, Validators.maxLength(20)]],
      date: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.loadAllPosts();
  }

  loadAllPosts(): void {
    this.request.getData<BlogAllPosts[]>(environments.BlogAllPosts.get).subscribe((data) => {
      this.allposts = data;
    }, (e) => {
      console.log(e);
    })
  }

  edit(allposts: BlogAllPosts): void {
    if (this.form.valid) {
      let updatedUser = {
        "image": this.form.get('image')?.value,
        "type": this.form.get('type')?.value,
        "date": this.form.get('date')?.value,
        "title": this.form.get('title')?.value,
        "description": this.form.get('description')?.value,
      }

      this.request.editData<BlogAllPosts>(`${environments.BlogAllPosts.put}/${this.selectedId}`, this.form.value).subscribe((data) => {
        this.loadAllPosts();
      }, (e) => {
        console.log(e);
      })
      this.formDisplay = false
      this.form.reset();
    }
  }

  editButton(allposts: BlogAllPosts) {
    this.selectedElement = allposts;

    this.formDisplay = true;
    this.selectedId = allposts.id;
    this.form.patchValue({
      image: allposts.image,
      title: allposts.title,
      description: allposts.description,
      type: allposts.type,
      date: allposts.date,
    });
  }

  deleteButton(allposts: BlogAllPosts) {
    this.selectedId = allposts.id;
    if (confirm('Are you sure you want to delete this')) {
      this.request.deleteData<BlogAllPosts>(`${environments.BlogAllPosts.delete}/${this.selectedId}`).subscribe((data) => {
        this.loadAllPosts();
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
        "image": this.form.get('image')?.value,
        "type": this.form.get('type')?.value,
        "date": this.form.get('date')?.value,
        "title": this.form.get('title')?.value,
        "description": this.form.get('description')?.value,
      }

      this.request.postData(`${environments.Category.post}`, addUser).subscribe((data) => {
        console.log('added');
        this.loadAllPosts();
      }, (e) => {
        console.log(e);
      })
      this.formDisplay = false
    }
  }

}
