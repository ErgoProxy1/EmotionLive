import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Right Now I Am';
  message = 'no user'

  constructor(private db: AngularFirestore, private auth: AuthService) {

  }

  test(): void {
    this.auth.doLogin("test@test.com", "123456").then(() => {
      this.message = `Welcome ${this.auth.fbAuth.auth.currentUser.email}`
    }).catch((err) => {
      this.message = `ERROR: ${err}`;
    });
  }
}
