import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-song-list',
  template: `
    <mat-list>
      <mat-list-item>
        <a [routerLink]="['/']">
          <button mat-mini-fab>
            <mat-icon>note_add</mat-icon>
          </button>
        </a>
      </mat-list-item>
      <mat-list-item *ngFor="let item of songList$ | async"
                    [routerLink]="['/', item.id]"
                    class="router-link">{{ item.title }}
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
  songList$;

  constructor(private songsService: SongsService) {
  }

  ngOnInit() {
    this.songList$ = this.songsService.songList$;
  }

}
