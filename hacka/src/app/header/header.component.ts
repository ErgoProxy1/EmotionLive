import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
