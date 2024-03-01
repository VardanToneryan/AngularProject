import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {}
  
  getData<T>(url: string){
    let header = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get<T>(url, {headers: header})
  }

}
