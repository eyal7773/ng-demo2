import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-two-way-bindings',
  templateUrl: './two-way-bindings.component.html',
  styleUrls: ['./two-way-bindings.component.css']
})
export class TwoWayBindingsComponent implements OnInit {

  constructor() { }

  someVar:number = 1;
  ngOnInit(): void {
  }
  
  handleButton():void {
    this.someVar++;
  }
  
  
  
  
  
  
  
  
  
  
  
  color:string = 'blue';
  resetColorChange():void {
    this.color = 'blue';
  }

}
