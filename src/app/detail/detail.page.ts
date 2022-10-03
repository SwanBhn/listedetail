import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
item ={};
  constructor(private router: Router,
              private activeroute : ActivatedRoute) {
                this.activeroute.queryParams.subscribe(params =>{
                this.item = this.router.getCurrentNavigation().extras.state.param1;
                });
              }

  ngOnInit() {
  }

}
