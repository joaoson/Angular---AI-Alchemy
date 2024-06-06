import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInPageComponentComponent } from './log-in-page-component.component';

describe('LogInPageComponentComponent', () => {
  let component: LogInPageComponentComponent;
  let fixture: ComponentFixture<LogInPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogInPageComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogInPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
