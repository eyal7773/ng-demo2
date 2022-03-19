import { Component, Input, OnInit } from '@angular/core';
import { Cake } from '../interfaces/Cake';

@Component({
  selector: 'app-input-with-for',
  templateUrl: './input-with-for.component.html',
  styleUrls: ['./input-with-for.component.css']
})
export class InputWithForComponent implements OnInit {

  constructor() { }
  @Input() cake:Cake = {name:'',score:0};
  ngOnInit(): void {
  }

}
