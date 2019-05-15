import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <app-header></app-header>
    <mat-sidenav-container class="song-book-container">

      <mat-sidenav opened="true" mode="side">
        <app-song-list></app-song-list>
      </mat-sidenav>

      <router-outlet></router-outlet>

    </mat-sidenav-container>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
