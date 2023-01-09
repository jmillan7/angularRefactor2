import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { lastValueFrom } from 'rxjs';
import { Data } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient) { }

  getPatients() {
    return this.perform('get','/patients');
  }

  async perform(method: string, resource: string, data: Data = {}) {
    const url = `http://localhost:8000${resource}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    };
    switch (method) {
      case 'delete':
        return lastValueFrom(this.http.delete(url, httpOptions));
      case 'get': 
        return this.http.get(url, httpOptions).pipe(map(res => {
          return res
        }))
      case 'put':
        return lastValueFrom(this.http.put(url, data, httpOptions));
      case 'post':  
        return lastValueFrom(this.http.post(url, data, httpOptions));
      default: return {'N/A': 'na'};
    }
  }
}
