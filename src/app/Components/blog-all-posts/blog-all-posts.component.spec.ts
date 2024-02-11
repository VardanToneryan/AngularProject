import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAllPostsComponent } from './blog-all-posts.component';

describe('BlogAllPostsComponent', () => {
  let component: BlogAllPostsComponent;
  let fixture: ComponentFixture<BlogAllPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogAllPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogAllPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
