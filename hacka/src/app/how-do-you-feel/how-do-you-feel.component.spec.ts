import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowDoYouFeelComponent } from './how-do-you-feel.component';

describe('HowDoYouFeelComponent', () => {
  let component: HowDoYouFeelComponent;
  let fixture: ComponentFixture<HowDoYouFeelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowDoYouFeelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowDoYouFeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
