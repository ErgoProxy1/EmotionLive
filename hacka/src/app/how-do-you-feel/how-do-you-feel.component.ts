import { Component, OnInit } from '@angular/core';
import { EmotionChoice } from '../classes/emotionChoice';
import { EmotionChoices } from '../consts/emotionChoices';
import { Router } from '@angular/router';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-how-do-you-feel',
    templateUrl: './how-do-you-feel.component.html',
    styleUrls: ['./how-do-you-feel.component.scss']
})

export class HowDoYouFeelComponent implements OnInit {
    emotionChoices: EmotionChoice[] = EmotionChoices;
    selectedEmotion: EmotionChoice;
    angleLeft = faAngleLeft;


    constructor(private router : Router) { }

    ngOnInit() {
    }

    selectEmotion(emotion: EmotionChoice): void {
        this.selectedEmotion == emotion ? this.selectedEmotion = null : this.selectedEmotion = emotion;
    }

    clickNext() : void {
        this.router.navigateByUrl(`why-do-you-feel/${this.selectedEmotion.name}`);
    }

    clickBack() : void {
        this.router.navigateByUrl('/home');
    }
}
