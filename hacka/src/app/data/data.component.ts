import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/services/auth.service';
import { EmotionData } from './emotionData';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  constructor(private db: AngularFirestore, private auth: AuthService) { }

  emotionDataDay: EmotionData[] = [];
  emotionDataMonth: EmotionData[] = [];
  emotionDataYear: EmotionData[] = [];

  joyCountDaily = 0;
  angerCountDaily = 0;
  sadnessCountDaily = 0;
  disgustCountDaily = 0;
  fearCountDaily = 0;
  surpriseCountDaily = 0;

  joyCountMonthly = 0;
  angerCountMonthly = 0;
  sadnessCountMonthly = 0;
  disgustCountMonthly = 0;
  fearCountMonthly = 0;
  surpriseCountMonthly = 0;

  joyCountYear = 0;
  angerCountYear = 0;
  sadnessCountYear = 0;
  disgustCountYear = 0;
  fearCountYear = 0;
  surpriseCountYear = 0;

  showCharts = false;

  titleD: string;
  typeD: string;
  dataD;
  columnNamesD;
  optionsD;
  widthD;
  heightD;

  titleW;
  typeW;
  dataW;
  columnNamesW;
  optionsW;
  widthW;
  heightW;

  titleM;
  typeM;
  dataM;
  columnNamesM;
  optionsM;
  widthM;
  heightM;

  ngOnInit() {
    this.showCharts = false;
  }

  initCharts(): void {
    this.getEmotionsDaily().then(() => {
      // Graph for the day
      this.titleD = 'Emotions throughout the Day';
      this.typeD = 'ColumnChart';
      this.dataD = [
        ['Joy', this.joyCountDaily, 'rgb(160, 228, 147)'],
        ['Anger', this.angerCountDaily, 'rgb(230, 113, 113)'],
        ['Sadness', this.sadnessCountDaily, 'rgb(49, 64, 196)'],
        ['Disgust', this.disgustCountDaily, 'rgb(128, 77, 128)'],
        ['Fear', this.fearCountDaily, 'rgb(235, 145, 61)'],
        ['Surprise', this.surpriseCountDaily, 'rgb(236, 222, 142)']
      ];
      this.columnNamesD = ['Emotion', 'Frequency', { role: 'style' }];
      this.optionsD = {
        chartArea: { width: '75%', height: '75%' },
        top: 100,
        animation: {
          startup: true,
          easing: 'in',
          duration: 1000,
        },
        legend: { position: "none" },
        bar: { groupWidth: "90%" }

      };
      this.widthD = 600;
      this.heightD = 600;
    });

    this.getEmotionsMonthly().then(() => {
      // Graph for the week
      this.titleW = 'Emotions throughout the Week';
      this.typeW = 'ColumnChart';
      this.dataW = [
        ['Joy', this.joyCountMonthly, 'rgb(160, 228, 147)'],
        ['Anger', this.angerCountMonthly, 'rgb(230, 113, 113)'],
        ['Sadness', this.sadnessCountMonthly, 'rgb(49, 64, 196)'],
        ['Disgust', this.disgustCountMonthly, 'rgb(128, 77, 128)'],
        ['Fear', this.fearCountMonthly, 'rgb(235, 145, 61)'],
        ['Surprise', this.surpriseCountMonthly, 'rgb(236, 222, 142)']
      ];
      this.columnNamesW = ['Emotion', 'Frequency', { role: 'style' }];
      this.optionsW = {
        chartArea: { width: '75%', height: '75%' },
        top: 100,
        animation: {
          startup: true,
          easing: 'in',
          duration: 1000,
        },
        legend: { position: "none" },
        bar: { groupWidth: "90%" }

      };
      this.widthW = 600;
      this.heightW = 600;
    });

    this.getEmotionsYearly().then(() => {
      //Graph for the Month
      this.titleM = 'Emotions throughout the Month';
      this.typeM = 'ColumnChart';
      this.dataM = [
        ['Joy', this.joyCountYear, 'rgb(160, 228, 147)'],
        ['Anger', this.angerCountYear, 'rgb(230, 113, 113)'],
        ['Sadness', this.sadnessCountYear, 'rgb(49, 64, 196)'],
        ['Disgust', this.disgustCountYear, 'rgb(128, 77, 128)'],
        ['Fear', this.fearCountYear, 'rgb(235, 145, 61)'],
        ['Surprise', this.surpriseCountYear, 'rgb(236, 222, 142)']
      ];
      this.columnNamesM = ['Emotion', 'Frequency', { role: 'style' }];
      this.optionsM = {
        chartArea: { width: '75%', height: '75%' },
        top: 100,
        animation: {
          startup: true,
          easing: 'in',
          duration: 1000,
        },
        legend: { position: "none" },
        bar: { groupWidth: "90%" }

      };
      this.widthM = 600;
      this.heightM = 600;

      this.showCharts = true;
    });
  }

  countEmotionsDaily(emotion: string) {
    if (emotion === "joy") {
      this.joyCountDaily++;
    } else if (emotion === "anger") {
      this.angerCountDaily++;
    } else if (emotion === "sadness") {
      this.sadnessCountDaily++;
    } else if (emotion === "disgust") {
      this.disgustCountDaily++;
    } else if (emotion === "fear") {
      this.fearCountDaily++;
    } else if (emotion === "surprise") {
      this.surpriseCountDaily++;
    }
  }

  getEmotionsDaily(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.auth.fbAuth.auth.currentUser) {
        let date = new Date();
        this.db.firestore.collection('emotions')
        .where("month", "==", date.getMonth())
        .where("year", "==", date.getFullYear())
        .where("day", "==", date.getDay())
        .get().then((querry) => {
          querry.forEach((doc) => {
            let data = doc.data();
            this.emotionDataYear.push({
              emotion: (data.emotion as string),
              reason: (data.reason as string),
              month: (data.month as number),
              year: (data.year as number),
              day: (data.day as number),
            });
            this.countEmotionsDaily(data.emotion as string);
          })
          resolve();
        })
      } else {
        reject();
      }
    })
  }

  countEmotionsMonthly(emotion: string) {
    if (emotion === "joy") {
      this.joyCountMonthly++;
    } else if (emotion === "anger") {
      this.angerCountMonthly++;
    } else if (emotion === "sadness") {
      this.sadnessCountMonthly++;
    } else if (emotion === "disgust") {
      this.disgustCountMonthly++;
    } else if (emotion === "fear") {
      this.fearCountMonthly++;
    } else if (emotion === "surprise") {
      this.surpriseCountMonthly++;
    }
  }

  getEmotionsMonthly(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.auth.fbAuth.auth.currentUser) {
        let date = new Date();
        this.db.firestore.collection('emotions')
        .where("uid", "==", this.auth.fbAuth.auth.currentUser.uid)
        .where("month", "==", date.getMonth())
        .where("year", "==", date.getFullYear())
        .get().then((querry) => {
          querry.forEach((doc) => {
            let data = doc.data();
            this.emotionDataMonth.push({
              emotion: (data.emotion as string),
              reason: (data.reason as string),
              month: (data.month as number),
              year: (data.year as number),
              day: (data.day as number),
            });
            this.countEmotionsMonthly(data.emotion as string);
          })
          resolve();
        })
      } else {
        reject();
      }
    })
  }

  countEmotionsYear(emotion: string) {
    if (emotion === "joy") {
      this.joyCountYear++;
    } else if (emotion === "anger") {
      this.angerCountYear++;
    } else if (emotion === "sadness") {
      this.sadnessCountYear++;
    } else if (emotion === "disgust") {
      this.disgustCountYear++;
    } else if (emotion === "fear") {
      this.fearCountYear++;
    } else if (emotion === "surprise") {
      this.surpriseCountYear++;
    }
  }

  getEmotionsYearly(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.auth.fbAuth.auth.currentUser) {
        let date = new Date();
        this.db.firestore.collection('emotions')
        .where("uid", "==", this.auth.fbAuth.auth.currentUser.uid)
        .where("year", "==", date.getFullYear())
        .get().then((querry) => {
          querry.forEach((doc) => {
            let data = doc.data();
            this.emotionDataDay.push({
              emotion: (data.emotion as string),
              reason: (data.reason as string),
              month: (data.month as number),
              year: (data.year as number),
              day: (data.day as number),
            });
            this.countEmotionsYear(data.emotion as string);
          })
          resolve();
        })
      } else {
        reject();
      }
    })
  }


}
