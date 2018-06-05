import { Component, OnInit } from '@angular/core';
import { AuthService, UserStatus } from '../../../services/auth.service';

@Component({
  selector: 'app-user-status',
  template: `
    <div *ngIf="user$ | async as user">
      <div [ngSwitch]="user.status"
           class="user-info">

        <mat-spinner *ngSwitchCase="UserStatus.pending"
                     color="accent"
                     diameter="40"
                     class="header-spinner"></mat-spinner>

        <a *ngSwitchCase="UserStatus.signedOut"
           (click)="signIn()"
           mat-button>
          <mat-icon>account_circle</mat-icon>
          <span>Sign in</span>
        </a>

        <div *ngSwitchCase="UserStatus.authenticated"
             class="signed-in-user-container"
             [matMenuTriggerFor]="menuPerson">

          <button mat-button class="usernamelink">
            <app-avatar [photoUrl]="user.userData.photoURL" [color]="user.userData.avatarColor"></app-avatar>
            <div class="username">{{ user.userData.displayName }}</div>
          </button>

          <mat-menu #menuPerson="matMenu" xPosition="before">
            <button mat-menu-item (click)="signOut($event)">
              <mat-icon>exit_to_app</mat-icon>
              <span>Sign Out</span>
            </button>
          </mat-menu>

        </div>
      </div>
    </div>
  `,
  styleUrls: ['./user-status.component.scss']
})
export class UserStatusComponent implements OnInit {
  user$;
  UserStatus = UserStatus;

  constructor(private userService: AuthService) {
    this.user$ = userService.user$;
  }

  ngOnInit() {
  }

  signIn() {
    this.userService.signIn();
  }

  signOut() {
    this.userService.signOut();
  }

}
