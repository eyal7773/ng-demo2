import { Component } from '@angular/core';
import { Cake } from './interfaces/Cake';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';
  cakes:Cake[]=[];
  someData:number = 1;
  name:string = '';
  constructor() {
    this.fillCakes();
  }

  fillCakes() {
    this.cakes.push({name:'עוגת שוקולד',score:8});
    this.cakes.push({name:'עוגת גבינה',score:10});
    this.cakes.push({name:'עוגת גזר',score:7});
  }

  add() {
    this.someData++;
  }

  changeName(name:string) : void {
    this.name = name;
  }

}
