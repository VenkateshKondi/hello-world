import { Component, OnInit } from '@angular/core';
// import { ClientRequest } from 'https';

@Component({
  selector: 'app-test',
  template: 
     `
     <br><br>
    <h2>My Name is Venki</h2>
    // <h2 class="colorClass">My Name is Venki</h2>
    // <h2 [class]="myText">My Name is Venki</h2>
    // <h2 [class.TextItalic]="required">My Name is Venki</h2>
    // <h2 [ngClass]="Group">My Name is Venki</h2>
    
    <h2 [style.coolor]="'pink'">Style BInding</h2>
    <h2 [style.coolor]="mycolor">Style BInding</h2>
    
    <h2 [ngStyle]="mystyle3">Style Binding with object</h2>
    
  `,
  styles: [`
    p{
      text-align:center;
      font-size:50px;
      color:brown;
    }
    input{
      font-size:50px;
      
    }
    h2{
      text-align:center;
      font-size:40px;
    }
    .colorClass{
      color:green;
    }
    .TextStyle{
      color:blue;
    }
    .TextSize{
      font-size:70px;
    }
    .TextItalic{
      font-style: italic;
    }
    
    `
  ]
})
export class TestComponent implements OnInit {
 public name="Venkatesh Kondi";
 public myUrl=window.location.href;
 public courseId="123";
 public myText="TextStyle";
 public myText1="TextSize";
 public required=true;
 public Group={
   "TextSize":this.required,
   "TextItalic":!this.required
 }

 public mystyle3={
   color:"gold"
 }

 public mycolor="blue";
  constructor() { }

  ngOnInit(): void {
  }
  methodCall(){
    return "welcome:"+this.name;
  }

}
