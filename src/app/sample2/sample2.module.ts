import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sample2Component } from './sample2/sample2.component';


//comment
@NgModule({
  declarations: [
    Sample2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[Sample2Component]
})
export class Sample2Module { }
