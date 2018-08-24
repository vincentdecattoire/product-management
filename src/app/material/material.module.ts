import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  declarations: []
})
export class MaterialModule { }
