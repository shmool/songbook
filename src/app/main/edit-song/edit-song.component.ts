import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-song',
  template: `

    <form class="edit-song" [formGroup]="form"
          (ngSubmit)="saveSong()">
      <mat-form-field floatLabel="never">
        <mat-label>song title</mat-label>
        <input matInput formControlName="title"
               class="song-title-input mat-input-element">
      </mat-form-field>

      <button class="save-btn" mat-mini-fab color="accent" [disabled]="!form.valid">
        <mat-icon>save</mat-icon>
      </button>

      <textarea class="song-lyrics-textarea" name="lyrics" formControlName="lyrics" ></textarea>

    </form>
  `,
  styleUrls: ['./edit-song.component.scss']
})
export class EditSongComponent implements OnInit {
  song$;
  form = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    lyrics: new FormControl()
  });

  constructor(private route: ActivatedRoute, private songsService: SongsService) {
  }

  ngOnInit() {
    this.route.params.forEach(param => {
      // asyncPipe unsubscribes from the previous reference
      this.song$ = this.songsService.getSong(param.id).pipe(tap(song => {
        this.form.patchValue(song);
      }));
    });
  }

  saveSong() {
    this.songsService.saveSong(this.form.value);
    // .then(res => this.router.navigate(['./', res.key]));
  }

}
