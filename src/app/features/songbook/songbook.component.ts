import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-songbook',
  template: `
    <mat-sidenav-container class="song-book-container">

      <mat-sidenav #menu [opened]="layout.menuOpened" [mode]="layout.menuMode" (click)="closeMenu()">
        <app-song-list></app-song-list>
      </mat-sidenav>

      <router-outlet></router-outlet>

    </mat-sidenav-container>
  `,
  styleUrls: ['./songbook.component.scss']
})
export class SongbookComponent implements OnInit {
  @ViewChild('menu') menu;

  constructor(public layout: LayoutService) {
  }

  ngOnInit() {
    this.layout.toggleMenu$.subscribe(() => {
      this.menu.toggle();
    });
  }

  closeMenu() {
    if (!this.layout.menuOpened) {
      this.menu.close();
    }
  }

}
