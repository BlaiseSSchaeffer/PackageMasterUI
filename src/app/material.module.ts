import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatSelectModule,
  MatInputModule,
  MatListModule,
  MatAutocompleteModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatAutocompleteModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatAutocompleteModule
  ],
  declarations: []
})
export class MaterialModule { }
