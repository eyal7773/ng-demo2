import { Component, OnInit } from '@angular/core';
import { FirstHttpService } from '../service/first-http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any = [];

  constructor(private usersClient:FirstHttpService) {
      this
        .usersClient
        .getUsers()
        .subscribe( (users)=> {
          this.users = users;
        })

   }

  ngOnInit(): void {
  }

}
