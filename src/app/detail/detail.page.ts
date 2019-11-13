import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  item:any;
  details:any[];

  constructor(private router:Router , private dataService:DataService) { 
    const currState = this.router.getCurrentNavigation().extras.state;
    this.item = currState.item || null

  }

  ngOnInit() {
    this.dataService.getDetails(this.item.id).subscribe(
      (details:any)=>{
        this.details = details.data;
      }
    );
  }

}
