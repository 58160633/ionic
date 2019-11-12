import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productUrl = 'https://api.codingthailand.com/api/course'

  constructor(private http: HttpClient) { }
  getProduct():Observable<any>{
    return this.http.get<any>(this.productUrl)
  }
}
