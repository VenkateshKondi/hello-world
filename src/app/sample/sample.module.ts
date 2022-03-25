import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { Sample2Module } from '../sample2/sample2.module';



@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    CommonModule,
    Sample2Module
  ],
  exports:[SampleComponent]
})
export class SampleModule { }
