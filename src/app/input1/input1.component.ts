import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.css']
})
export class Input1Component implements OnInit {

  constructor() { }


  @Input()  item = 0
  ngOnInit(): void {
  }

}
