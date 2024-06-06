import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySectionComponent } from './display-section.component';

describe('DisplaySectionComponent', () => {
  let component: DisplaySectionComponent;
  let fixture: ComponentFixture<DisplaySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplaySectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplaySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
