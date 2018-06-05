import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div>
      <mat-toolbar color="primary" class="mat-elevation-z6">

        <span routerLink="songbook">Song Book</span>

        <span class="app-toolbar-filler"></span>

        <app-user-status></app-user-status>

      </mat-toolbar>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
