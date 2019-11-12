import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  product: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProduct().subscribe(
      (product:any)=>{
        this.product = product.data;
        console.log(this.product)
      }
    );
  }

}
