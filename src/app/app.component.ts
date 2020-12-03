import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentProgress = 70;
  currentProgressColor = 'dodgerblue';
  name = 'chao buoi sang';
  show = false;
  isOpened = true;
  @ViewChild('sidenav') sidenav: MatSidenav;
  users = [
    {
      name: 'long',
      age: 21,
    },
    {
      name: 'lan',
      age: 20,
    },
    {
      name: 'loc',
      age: 23,
    },
    {
      name: 'huy',
      age: 22,
    }
  ]

  handle() {
    console.log('hello world!!!');
  }
  public openLeftSide() {
    this.isOpened = !this.isOpened;
    this.sidenav.toggle();
  }

  public closeLeftSide() {
    this.isOpened = false;
  }
}
