import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognizeEmotionsComponent } from './recognize-emotions.component';

describe('RecognizeEmotionsComponent', () => {
  let component: RecognizeEmotionsComponent;
  let fixture: ComponentFixture<RecognizeEmotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecognizeEmotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecognizeEmotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
