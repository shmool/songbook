import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SongComponent } from './song/song.component';
import { SongListComponent } from './song-list/song-list.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { MaterialComponentsModule } from './material-components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, HeaderComponent, SongComponent, SongListComponent, EditSongComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialComponentsModule,
    ReactiveFormsModule
  ]
})
export class MainModule {
}
