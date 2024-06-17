import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagePostComponent } from './homepage-post.component';

describe('HomepagePostComponent', () => {
  let component: HomepagePostComponent;
  let fixture: ComponentFixture<HomepagePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepagePostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepagePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
