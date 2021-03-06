import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'หน้าหลัก',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'เกี่ยวกับเรา',
      url: '/about',
      icon: 'person'
    },
    {
      title: 'Product',
      url: '/product',
      icon: 'cube'
    },
    {
      title: 'News',
      url: '/news',
      icon: 'paper'

    },
    {
      title: 'login',
      url: '/login',
      icon: 'paper'
    }

   
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
