import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { VenkiComponent } from './venki/venki.component';
import { TestComponent } from './test/test.component';
import { SampleModule } from './sample/sample.module';
import { Sample2Module } from './sample2/sample2.module';
import { HomeComponent } from './home/home.component';
import { EventbindingModule } from './eventbinding/eventbinding.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    VenkiComponent,
    TestComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    SampleModule,
    Sample2Module,
    EventbindingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
