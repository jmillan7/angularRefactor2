import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { lastValueFrom, Observable } from 'rxjs';
import { Data } from '@angular/router';
import { map } from 'rxjs/operators';
import { Patients } from './models/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient) { }
  

  getPatients(): Observable<Patients[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      })
    };
    const patients = this.http.get<Patients[]>('http://localhost:8000/patients', httpOptions);
    return patients;
  }

  async perform(method: string, resource: string, data: Data = {}) {
    const url = `http://localhost:8000${resource}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      })
    };
    switch (method) {
      case 'get': 
        return this.http.get<Patients>(url, httpOptions).pipe(map((data: {})=> {
          console.log(data)
          return 
        }))
      default: return {'N/A': 'na'};
    }
  }
}
