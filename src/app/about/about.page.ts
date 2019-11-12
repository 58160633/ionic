import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  myEmail = 'reahrewrite@gmail.com';
  company = {
    name : 'Pawanee',
    province : 'Bangkok'
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  gotoContact(){
    // this.navCtrl.navigateForward('/contact')
    // this.navCtrl.navigateForward(['/contact',{email:this.myEmail}])
    this.navCtrl.navigateForward(['/contact',{email:this.myEmail}],
    {state: { company: this.company}
    })
  }

}
