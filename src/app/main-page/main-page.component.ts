import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{

  patients: {};
  constructor(private apiClient: ApiClientService) {
    this.patients = [];
  }

  ngOnInit(): void {
    this.apiClient.getPatients().then((patients) => {
      this.patients = patients;
    })
  }

}
