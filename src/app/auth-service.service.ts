import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(data: any):Observable<any>{
    return this.http.post('http://localhost:4200/home',data)
  }

  sendData(datas:any){
    return this.http.post('http://localhost:4200/home',datas)
  }
}
