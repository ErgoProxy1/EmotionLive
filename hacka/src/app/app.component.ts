import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hacka';

  constructor(private db: AngularFirestore, private auth: AuthService){
    
  }

  test(): void{
    //register
    //this.auth.doRegister("hello@me.com", "eeeeee")
    //login
    this.auth.doLogin("test@test.com", "123456");

    //Add doc to db
    this.db.firestore.collection('testing').doc(this.db.createId()).set({
      id: Math.ceil(Math.random()),
      user: this.auth.fbAuth.auth.currentUser.uid,
      name: "BIG MAN"
    });
  }
}
