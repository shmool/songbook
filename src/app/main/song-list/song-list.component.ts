import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-song-list',
  template: `
    <mat-list>
      <mat-list-item>
        <a>
          <button mat-mini-fab>
            <mat-icon>note_add</mat-icon>
          </button>
        </a>
      </mat-list-item>
      <mat-list-item *ngFor="let item of songList$"
                    class="router-link">{{ item.title }}
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
  songList$ = [
    {id: 1, title: 'Hello'},
    {id: 2, title: 'World'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
