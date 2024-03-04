import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogAllPostsComponent } from './admin-blog-all-posts.component';

describe('AdminBlogAllPostsComponent', () => {
  let component: AdminBlogAllPostsComponent;
  let fixture: ComponentFixture<AdminBlogAllPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBlogAllPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminBlogAllPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
