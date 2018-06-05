import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `
    <div *ngIf="photoUrl"
         class="avatar"
         [ngStyle]="{'background-image': getAvatarImage()}"></div>

    <mat-icon *ngIf="!photoUrl"
             class="avatar"
             [ngStyle]="{color: color}">face</mat-icon>
  `,
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() photoUrl;
  @Input() color;

  constructor() { }

  ngOnInit() {
  }

  getAvatarImage() {
    return `url(${this.photoUrl})`;
  }

}
