import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-song',
  template: `

    <form class="edit-song" ngNoForm>
      <mat-form-field floatLabel="never">
        <mat-label>song title</mat-label>
        <input matInput
               class="song-title-input mat-input-element">
      </mat-form-field>

      <button class="save-btn" mat-mini-fab color="accent">
        <mat-icon>save</mat-icon>
      </button>

      <textarea class="song-lyrics-textarea" name="lyrics"></textarea>

    </form>
  `,
  styleUrls: ['./edit-song.component.scss']
})
export class EditSongComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  saveSong() {
  }

}
