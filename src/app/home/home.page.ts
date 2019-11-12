import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Smart City';
  titleImage = {
    srcUrl : "/assets/b.png"
  };

  isShow = false;
  product = [
    {name : 'Smart Envoriment', price : '40'},
    {name : 'Smart Economy', price : '50'},
    {name : 'Smart Mobility', price : '50'},
    {name : 'Smart Energy', price : '50'},
    {name : 'Smart People', price : '50'},
    {name : 'Smart Living', price : '50'},
    {name : 'Smart Governance', price : '50'}
  ];
  color = '#3394FF';
  isActive = false;
  
  
  

  constructor() {}
  onClick(){
    //alert('คลิกทำไม?');
    //console.log(`hi${this.title}`);
    //this.titleImage.srcUrl = "/assets/shapes.svg";
    //this.title = 'วันลอยกระทง new ';
    //this.isShow = true;
    this.isShow = !this.isShow;
    this.color = '#BF33FF';
    this.isActive = !this.isActive;
 
  }

}
