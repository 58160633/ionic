import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'วันลอยกระทง';
  titleImage = {
    srcUrl : "/assets/loy.jpg"
  };

  isShow = false;
  product = [
    {name : 'กระทง1', price : '40'},
    {name : 'กระทง2', price : '50'}
  ];

  constructor() {}
  onClick(){
    //alert('คลิกทำไม?');
    //console.log(`hi${this.title}`);
    //this.titleImage.srcUrl = "/assets/shapes.svg";
    //this.title = 'วันลอยกระทง new ';
    //this.isShow = true;
    this.isShow = !this.isShow;
 
  }

}
