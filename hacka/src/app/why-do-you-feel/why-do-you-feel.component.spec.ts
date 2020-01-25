import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyDoYouFeelComponent } from './why-do-you-feel.component';

describe('WhyDoYouFeelComponent', () => {
  let component: WhyDoYouFeelComponent;
  let fixture: ComponentFixture<WhyDoYouFeelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyDoYouFeelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyDoYouFeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
