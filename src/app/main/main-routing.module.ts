import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
      { path: ':id/edit', component: EditSongComponent},
      { path: ':id', component: SongComponent},
      { path: '', component: EditSongComponent}
    ] }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
