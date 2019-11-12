import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit, OnDestroy {
email:string;
company:any;
  constructor(private router: Router,private route: ActivatedRoute, private menu : MenuController) {
    this.email = this.route.snapshot.paramMap.get('email');
    const currState = this.router.getCurrentNavigation().extras.state;
    this.company = currState.company || null;
    
   
   }

  ngOnInit() {
    this.menu.enable(false);
  }
  ngOnDestroy(){
    this.menu.enable(true);
  }

}
