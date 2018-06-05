import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songbook',
  template: `
    <mat-sidenav-container class="song-book-container">

      <mat-sidenav opened="true" mode="side">
        <app-song-list></app-song-list>
      </mat-sidenav>

      <router-outlet></router-outlet>

    </mat-sidenav-container>
  `,
  styleUrls: ['./songbook.component.scss']
})
export class SongbookComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
