import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  @Output() onCountdownEnd = new EventEmitter<string>();

  messages = [
    'Are you ready?',
    '3',
    '2',
    '1',
    'Start!'
  ];
  currentMessageIndex: number;

  constructor() { }

  ngOnInit() {
    this.currentMessageIndex = 0;
    setTimeout(this.incrementMessageIndex, 1000);
  }

  incrementMessageIndex = () => {
    if (this.currentMessageIndex + 1 < this.messages.length) {
      this.currentMessageIndex++;
      setTimeout(this.incrementMessageIndex, 1000);
    } else {
      this.onCountDownEnd();
    }
  }

  onCountDownEnd = () => {
    this.onCountdownEnd.emit();
  }

}
