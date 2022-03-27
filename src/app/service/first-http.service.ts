import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirstHttpService {

  constructor(private client:HttpClient) {

   }

   getUsers() {
     return this.client.get('https://jsonplaceholder.typicode.com/users');
   }
}
