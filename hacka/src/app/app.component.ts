import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Right Now I Am';

  constructor(private db: AngularFirestore, private auth: AuthService, private router: Router) {
    
  }

  ngOnInit(){
    this.router.navigate([''])
  }

}
