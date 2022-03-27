import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-use-route-param',
  templateUrl: './use-route-param.component.html',
  styleUrls: ['./use-route-param.component.css']
})
export class UseRouteParamComponent implements OnInit {

  id:string = '';

  constructor(private route:ActivatedRoute,
              private router:Router) {
        
          this.route.params.subscribe((params:Params) => {
              this.id = params['id'];
            });
    }

  

  ngOnInit(): void {
  }

}
