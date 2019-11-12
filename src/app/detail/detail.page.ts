import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  item:any;

  constructor(private router:Router) { 

    const currState = this.router.getCurrentNavigation().extras.state;
   
    this.item = currState.item || null
  }

  ngOnInit() {
  }

}
