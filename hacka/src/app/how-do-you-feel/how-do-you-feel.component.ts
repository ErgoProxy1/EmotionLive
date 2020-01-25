import { Component, OnInit } from '@angular/core';
import { EmotionChoice } from '../classes/emotionChoice';
import { EmotionChoices } from '../consts/emotionChoices';

@Component({
  selector: 'app-how-do-you-feel',
  templateUrl: './how-do-you-feel.component.html',
  styleUrls: ['./how-do-you-feel.component.scss']
})
export class HowDoYouFeelComponent implements OnInit {
  emotionChoices: EmotionChoice[] = EmotionChoices;
  selectedEmotion: EmotionChoice;

  constructor() { }

  ngOnInit() {
  }

  selectEmotion(emotion: EmotionChoice): void {
    this.selectedEmotion == emotion ? this.selectedEmotion = null : this.selectedEmotion = emotion;
  }
}
