import { Injectable } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  toggleMenu$ = new BehaviorSubject(false);
  mobileQuery;
  showMenuButton;
  menuOpened;
  menuMode;

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 700px)');

    this.showMenuButton = this.mobileQuery.matches;
    this.menuOpened = !this.mobileQuery.matches;
    this.menuMode = this.mobileQuery.matches ? 'push' : 'side';
  }

  toggleMenu() {
    this.toggleMenu$.next(true);
  }

}
