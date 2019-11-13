import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productUrl = 'https://api.codingthailand.com/api/course'
  newsUrl    = 'https://newsapi.org/v2/top-headlines?country=th&apiKey=2fabc6aa2dda443f892cd3ec9bc6dd6c'

  constructor(private http: HttpClient) { }
  getProduct():Observable<any>{
    return this.http.get<any>(this.productUrl)
  }
  getDetails(id:number):Observable<any>{
    return this.http.get<any>(this.productUrl + '/' +id.toString());
  }

  getNews(page?:number , pageSize?:number):Observable<any>{
    const myNewsUrl = `${this.newsUrl}&page=${page}&pageSize=${pageSize}`;
    return this.http.get<any>(myNewsUrl)
  }

}
