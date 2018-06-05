import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-header',
  template: `
    <div>
      <mat-toolbar color="primary" class="mat-elevation-z6">

        <button *ngIf="layout.showMenuButton" mat-icon-button (click)="toggleMenu()">
          <mat-icon>menu</mat-icon>
        </button>

        <span routerLink="songbook">Song Book</span>

        <span class="app-toolbar-filler"></span>

        <app-user-status></app-user-status>

      </mat-toolbar>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public layout: LayoutService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.layout.toggleMenu();
  }

}
