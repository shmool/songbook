import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';

export interface Song {
  id?: number;
  title: string;
  lyrics?: string;
  performer?: string;
  writer?: string;
  composer?: string;
}

export interface SongTitle {
  id?: number;
  title: string;
  performer?: string;
}


const songs = [
  { id: 1, title: 'Heal the World', performer: 'Michael Jackson', lyrics: 'Heal the world \n Make it a better place' },
  { id: 2, title: 'Will You Be There', performer: 'Michael Jackson', lyrics: 'Hold me \n Like the river Jordan' },
  { id: 3, title: 'Gone Too Soon', performer: 'Michael Jackson', lyrics: 'Like a comet \n Blazing across the evening sky' }
];


@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private _songlist$: BehaviorSubject<SongTitle[]> = new BehaviorSubject([]);

  get songList$(): Observable<SongTitle[]> {
    return this._songlist$ as Observable<SongTitle[]>;
  }

  constructor(private http: HttpClient) {
    this._songlist$.next(
      songs.map(song => ({ id: song.id, title: song.title })
      ));
  }

  getSongList() {

  }

  getSong(id) {
    const res = songs.find(song => song.id === +id);
    console.log(res);
    return of(res);
  }

  saveSong(song) {

  }
}
