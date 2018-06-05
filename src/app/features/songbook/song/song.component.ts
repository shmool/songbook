import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-song',
  template: `
    <div class="song" *ngIf="song$ | async as song">
      <h2>{{ song.title }}</h2>
      <textarea class="lyrics" disabled>{{ song.lyrics }}</textarea>
    </div>
  `,
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  song$;

  constructor(private route: ActivatedRoute, private songsService: SongsService) {
  }

  ngOnInit() {
    this.route.params.forEach(param => {
      // asyncPipe unsubscribes from the previous reference
      this.song$ = this.songsService.getSong(param.id);
    });
  }

}
