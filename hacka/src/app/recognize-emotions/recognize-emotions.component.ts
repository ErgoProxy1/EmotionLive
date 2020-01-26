import { Component, OnInit } from '@angular/core';
import { RECOGNIZABLE_EMOTIONS } from '../consts/recognizableEmotions';

@Component({
  selector: 'app-recognize-emotions',
  templateUrl: './recognize-emotions.component.html',
  styleUrls: ['./recognize-emotions.component.scss']
})
export class RecognizeEmotionsComponent implements OnInit {
  state: string;
  displayingResult: boolean;

  round: number;
  correctOption;
  selectedOption;
  options;

  constructor() { }

  ngOnInit() {
    this.state = 'pre-game'
  }

  startCountdown() {
    this.state = 'countdown';
  }

  startGame(): void {
    this.state = 'game';
    this.round = 0;
    this.initRound();
  }

  initRound = () => {
    this.getOptions();
    this.displayingResult = false;
    if (this.round < 3) {
      setTimeout(this.displayRoundResults, 10000);
      this.round++;
    } else {
      this.state = 'pre-game';
    }
  }

  getOptions(): void {
    this.selectedOption = null;
    this.options = [];

    while (this.options.length < 4) {
      let random = Math.floor(Math.random()*RECOGNIZABLE_EMOTIONS.length);

      let valid = true;
      this.options.forEach(option => {
        if (option.name === RECOGNIZABLE_EMOTIONS[random].name) {
          valid = false;
        }
      });

      if (valid) {
        this.options.push(RECOGNIZABLE_EMOTIONS[random]);
      }
    }

    let random =  Math.floor(Math.random()*4);
    this.correctOption = this.options[random];
  }

  displayRoundResults = () => {
    this.displayingResult = true;
    setTimeout(this.initRound, 3000);
  }

  selectOption(option) {
    this.selectedOption = option;
  }
}
