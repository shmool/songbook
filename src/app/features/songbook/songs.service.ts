import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  songList$ = new BehaviorSubject(null);

  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    this.getSongList();
  }

  getSongList() {
    return this.http.get(`${environment.firebaseConfig.databaseURL}/songList.json`).pipe(
      map(songListObj => {
        return Object.keys(songListObj).map(id => ({ id, title: songListObj[id] }));
      }),
    ).subscribe(songList => this.songList$.next(songList));
  }

  getSong(id) {
    return this.http.get(`${environment.firebaseConfig.databaseURL}/songs/${id}.json`).pipe(
      map(songListObj => {
        return { ...songListObj, id };
      })
    );
  }

  saveSong(song) {
    return this.db.list('songs').push(song)
      .then((res) => {
        setTimeout(this.getSongList.bind(this), 1000);
        return res;
      });
  }
}
