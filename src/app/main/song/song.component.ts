import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-song',
  template: `
    <div class="song">
      <h2>{{ song.title }}</h2>
      <a routerLink="edit">
        <button class="edit-btn" mat-mini-fab color="accent">
          <mat-icon>edit</mat-icon>
        </button>
      </a>

      <textarea class="lyrics" disabled>{{ song.lyrics }}</textarea>
    </div>
  `,
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  song = { id: 1, title: 'Heal the World', performer: 'Michael Jackson', lyrics: 'Heal the world \n Make it a better place' };

  constructor() {
  }

  ngOnInit() {
  }

}
