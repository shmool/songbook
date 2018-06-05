import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { auth } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { tap } from 'rxjs/operators';

export interface User {
  displayName?: string;
  uid?: string;
  photoURL?: string;
  avatarColor?: string;
  email?: string;
}

export enum UserStatus {
  pending,
  signedOut,
  authenticated
}

export interface Auth {
  status: UserStatus;
  userData?: User;
  error?: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new BehaviorSubject<Auth>({ status: UserStatus.pending, userData: null });

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe(user => {
      this.user$.next({
        status: user ? UserStatus.authenticated : UserStatus.signedOut,
        userData: user
      });
    });
  }

  enterPending() {
    this.user$.next({ status: UserStatus.pending });
  }

  signIn() {
    this.enterPending();
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signOut() {
    this.enterPending();
    this.afAuth.auth.signOut()
      .then(() => this.user$.next({
        status: UserStatus.signedOut
      }));
  }

}
