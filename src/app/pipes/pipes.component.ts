import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  birth:Date = new Date(1980,7,8);
  total:number = 459;
  fee:number = 0.7;
  someObject:any = {
    'Title': 'surf',
    'isRisky': 'Yes'
    };

  constructor() { }

  ngOnInit(): void {
  }

}
