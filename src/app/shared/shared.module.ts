import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { MatIconModule } from '@angular/material';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [
    AvatarComponent,
    LoadingComponent
  ],
  exports: [
    AvatarComponent,
    LoadingComponent
  ]
})
export class SharedModule {
}
