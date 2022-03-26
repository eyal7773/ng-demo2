import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor() { }

  getUsers() {
    return [
      {name:'John',id:1},
      {name:'Mariana',id:2},
      {name:'Alexy',id:3},
      {name:'Achmed',id:4}
    ]
  }
}
