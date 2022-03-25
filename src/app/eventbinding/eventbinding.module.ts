import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventbindingComponent } from './eventbinding/eventbinding.component';



@NgModule({
  declarations: [
    EventbindingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EventbindingComponent
  ]
})
export class EventbindingModule { }
