import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  public greetings="";
  public data="";
  constructor() { }

  ngOnInit(): void {
  }
  message(message: any){
    console.log(message);
  }

  onClick(){
    this.greetings="welcome to Angular 12"
  }
  
}
