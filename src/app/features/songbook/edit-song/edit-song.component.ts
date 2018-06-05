import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { SongsService } from '../songs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-song',
  template: `

    <form class="edit-song"
          #f="ngForm"
          (ngSubmit)="saveSong(f.value)"
          *ngIf="(user$ | async).userData; else signIn">
      <mat-form-field floatLabel="never">
        <mat-label>song title</mat-label>
        <input matInput name="title" ngModel required pattern="[^ ]+.*"
               class="song-title-input mat-input-element">
      </mat-form-field>

      <button class="save-btn" mat-mini-fab color="accent" [disabled]="!f.valid">
        <mat-icon>save</mat-icon>
      </button>

      <textarea class="song-lyrics-textarea" name="lyrics" ngModel required></textarea>

    </form>

    <ng-template #signIn>
      <h2>Sign in to add a song</h2>
    </ng-template>
  `,
  styleUrls: ['./edit-song.component.scss']
})
export class EditSongComponent implements OnInit {
  user$;

  constructor(
    private router: Router,
    private authService: AuthService,
    private songsService: SongsService) {
  }

  ngOnInit() {
    this.user$ = this.authService.user$;
  }

  saveSong(song) {
    this.songsService.saveSong(song)
      .then(res => this.router.navigate(['/', res.key]));
  }

}
