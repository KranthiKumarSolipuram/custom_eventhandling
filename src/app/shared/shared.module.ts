import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    GridComponent
  ]
})
export class SharedModule { }
