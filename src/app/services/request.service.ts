import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getData<T>(url: string) {
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<T>(url, { headers: header })
  }

  editData<T>(url: string, value: T) {
    let header = new HttpHeaders({ 'Content-Type': 'selectedIdapplication/json' });
    return this.http.put<T>(url, value, { headers: header })
  }

  deleteData<T>(url: string) {
    let header = new HttpHeaders({ 'Content-Type': 'application' });
    return this.http.delete<T>(url, { headers: header })
  }

  postData<T>(url: string, value: T) {
    let header = new HttpHeaders({ 'Content-Type': 'application' });
    return this.http.post<T>(url, value, { headers: header })
  }
}
