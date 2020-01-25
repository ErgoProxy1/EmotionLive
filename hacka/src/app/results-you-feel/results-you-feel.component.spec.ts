import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsYouFeelComponent } from './results-you-feel.component';

describe('ResultsYouFeelComponent', () => {
  let component: ResultsYouFeelComponent;
  let fixture: ComponentFixture<ResultsYouFeelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsYouFeelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsYouFeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
