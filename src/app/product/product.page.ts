import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  product: any[];

  constructor(private dataService: DataService, private navCtrl: NavController) { }

  ngOnInit() {
    this.dataService.getProduct().subscribe(
      (product:any)=>{
        this.product = product.data;
      }
    );
  }







  itemSelected(p:any) {
    this.navCtrl.navigateForward(['/detail'],{state: {item:p} } );
    console.log(p);
  }

}
