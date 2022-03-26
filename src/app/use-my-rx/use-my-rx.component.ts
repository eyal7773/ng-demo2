import { Component, OnInit } from '@angular/core';
import { FirstRxService } from '../services/first-rx.service';

@Component({
  selector: 'app-use-my-rx',
  templateUrl: './use-my-rx.component.html',
  styleUrls: ['./use-my-rx.component.css']
})
export class UseMyRxComponent implements OnInit {

  data: number[] = [];

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
  }

  ngOnInit(): void {
  }

}
