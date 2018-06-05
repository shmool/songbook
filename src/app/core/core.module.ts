import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserStatusComponent } from './header/user-status/user-status.component';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    UserStatusComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
