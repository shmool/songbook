import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatFormFieldModule
} from '@angular/material';

const materialModules = [
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  exports: materialModules
})
export class MaterialComponentsModule {
}
