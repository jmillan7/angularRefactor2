import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '../api-client.service';
import { Patients } from '../models/patient.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  @Input() patients: Patients[];
  patients$: Observable<Patients[]>;

  constructor(private apiClient: ApiClientService) {
  }

  ngOnInit(): void {
    this.getPatients();

  }
  getPatients() {
    this.apiClient.getPatients().subscribe(patients => this.patients = patients);
    this.patients$ = this.apiClient.getPatients();
  }

}
