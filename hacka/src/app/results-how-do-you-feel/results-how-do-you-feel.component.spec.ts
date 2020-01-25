import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsHowDoYouFeelComponent } from './results-how-do-you-feel.component';

describe('ResultsHowDoYouFeelComponent', () => {
  let component: ResultsHowDoYouFeelComponent;
  let fixture: ComponentFixture<ResultsHowDoYouFeelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsHowDoYouFeelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsHowDoYouFeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
