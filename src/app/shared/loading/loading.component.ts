import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="flex-column">
      <div class="flex-row">
        <mat-spinner color="accent"></mat-spinner>
      </div>
    </div>
  `,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
