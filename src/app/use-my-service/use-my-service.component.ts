import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../service/users-service.service';

@Component({
  selector: 'app-use-my-service',
  templateUrl: './use-my-service.component.html',
  styleUrls: ['./use-my-service.component.css']
})
export class UseMyServiceComponent implements OnInit {

  users:any[] = [];
  
  constructor(private myService:UsersServiceService) {

      this.users = this.myService.getUsers();

   }

  ngOnInit(): void {
  }

}
