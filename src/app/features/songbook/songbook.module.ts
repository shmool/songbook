import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongbookComponent } from './songbook.component';
import { SongComponent } from './song/song.component';
import { SongListComponent } from './song-list/song-list.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { RouterModule, Routes } from '@angular/router';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SongbookComponent,
    children: [
      { path: '', component: EditSongComponent },
      { path: ':id', component: SongComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    SongbookComponent,
    SongComponent,
    SongListComponent,
    EditSongComponent
  ]
})
export class SongbookModule {
}
