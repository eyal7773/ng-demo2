import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-var',
  templateUrl: './template-var.component.html',
  styleUrls: ['./template-var.component.css']
})
export class TemplateVarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  handleValue(v:string):void {
    console.log('value is : ',v);
    
  }
}
