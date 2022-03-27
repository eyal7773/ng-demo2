import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirstRxService } from '../services/first-rx.service';
import { of } from 'rxjs';


@Component({
  selector: 'app-use-my-rx',
  templateUrl: './use-my-rx.component.html',
  styleUrls: ['./use-my-rx.component.css']
})
export class UseMyRxComponent implements OnInit {

  data: number[] = [];

  msg: string = '';

  constructor(private myRxService: FirstRxService) {
    this.myRxService.getData().subscribe(
      {
        next: (msg) => {
          console.log(msg);
          this.data.push(msg);
        },
        error: (err) => console.log(err),
        complete: () => this.data.push(0)
      });

    this.getItems()
  }

  getItems() {
    let x = of(1, 2, 3, 4, 5);
    x.subscribe(
      (z) => {
        setTimeout(() => {
          this.msg = z.toString();
        }, z * 1500)
      })
  }


  ngOnInit(): void {
  }

}
