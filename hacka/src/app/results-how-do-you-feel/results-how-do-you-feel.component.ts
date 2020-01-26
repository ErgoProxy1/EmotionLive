import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { REASONS, Reason } from '../consts/reasons';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/services/auth.service';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-results-how-do-you-feel',
  templateUrl: './results-how-do-you-feel.component.html',
  styleUrls: ['./results-how-do-you-feel.component.scss']
})
export class ResultsHowDoYouFeelComponent implements OnInit {
  @Input() emotion: string = this.route.snapshot.paramMap.get('emotion');
  @Input() reasonId: string = this.route.snapshot.paramMap.get('id');
  reason: Reason = { id: 0, emotions: ['', ''], reason: '', imageUrl: '' };


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private db: AngularFirestore,
    private auth: AuthService
  ) { }

  ngOnInit() {
    REASONS.forEach(reason => {
      if (this.reasonId === reason.id.toString()) {
        this.reason = reason;
        this.pushToDB();
      }
    });
  }

  pushToDB() {
    if (this.auth.fbAuth.auth.currentUser) {
      this.db.firestore.collection('emotions').doc(this.db.createId()).set({
        uid: this.auth.fbAuth.auth.currentUser.uid,
        reason: this.reason.reason,
        emotion: this.emotion,
        date: firestore.Timestamp.now()
      })
    }
  }

  getTest() {
    if (this.auth.fbAuth.auth.currentUser) {
      this.db.firestore.collection('emotions').where("uid", "==", this.auth.fbAuth.auth.currentUser.uid).get().then((querry) => {
        querry.forEach((doc) => {
          console.log(doc.data());
          console.log(doc.data().date.toDate())
        })
      })
    }
  }

}
