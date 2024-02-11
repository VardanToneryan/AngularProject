import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PravacyPolicyComponent } from './pravacy-policy.component';

describe('PravacyPolicyComponent', () => {
  let component: PravacyPolicyComponent;
  let fixture: ComponentFixture<PravacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PravacyPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PravacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
