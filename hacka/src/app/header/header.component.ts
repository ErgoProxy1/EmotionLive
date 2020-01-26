import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  homeIcon = faHome;
  showNavigation: boolean = false;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  toggleNav(): void {
    this.showNavigation ? this.hideNav() : this.showNav();
  }

  showNav(): void {
    this.showNavigation = true;
  }

  hideNav(): void {
    this.showNavigation = false;
  }

  logout() {
    this.auth.fbAuth.auth.signOut().then(() => {
      this.auth.user = null;
      this.auth.loggedIn = false;
    }).catch((err) => {
      console.log(err);
    })
  }

}
