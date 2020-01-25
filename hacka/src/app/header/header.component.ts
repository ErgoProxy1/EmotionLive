import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  homeIcon = faHome;
  showNavigation: boolean = false;
  constructor() { }

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

}
