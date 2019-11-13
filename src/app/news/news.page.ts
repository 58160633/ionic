import { Component, OnInit,OnDestroy } from '@angular/core';
import { DataService } from '../shared/data.service';
import { LoadingController } from '@ionic/angular';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit , OnDestroy{
  totalResults:number;
  articles:any[] = [];
  loading:any;
  page=1;
  pageSize = 1;
  event : any;
  sub: Subscription

  
  constructor(private dataService: DataService,private loadingCtrl: LoadingController) {}
  

  ngOnInit() {}
  async ionViewWillEnter(){
    this.loading = await this.loadingCtrl.create({
      message : 'กำลังโหลดข้อมูล',
      spinner : 'dots'
    });
  await this.loading.present();
  this.getNews();
  }
  
  getNews(event?:any){
    this.dataService.getNews(this.page,this.pageSize).subscribe(
      (news:any)=>{
        this.totalResults = news.totalResults;
        this.articles = this.articles.concat(news.articles);
      },
      async (error: any)=>{
        await this.loading.dismiss();
        if(event) {event.target.complete();}
      },
      async ()=>{
        await this.loading.dismiss();
        if(event){ event.target.complete();}
      }
    );
  }

  doRefresh(event:any){
    if (this.event){this.event.target.disables = false;}
    this.articles = [];
    this.page = 1;
    this.pageSize = 10;
    this.getNews(event);
    // console.log('doRefresh');
  }

  loadData(event:any){
    this.event = event;
    this.page++;
    this.getNews(event);
    if(this.page === Math.ceil(this.totalResults/this.pageSize)){
      event.target.disabled = true;
    }
  }

  OnDestroy(){
    this.sub.unsubscribe();
  }

}
