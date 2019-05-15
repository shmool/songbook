import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div>
      <mat-toolbar color="primary" class="mat-elevation-z6">

        <span routerLink="songbook">Song Book</span>

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
