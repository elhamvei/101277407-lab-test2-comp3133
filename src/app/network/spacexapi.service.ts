import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {

  constructor(private http: HttpClient) { }

  getAllMissions() {
    return this.http.get<any[]>('https://api.spacexdata.com/v3/launches');
  }

  filterMissionsByYear(year: number) {
    return this.http.get<any[]>(`https://api.spacexdata.com/v3/launches?launch_year=${year}`);
  }

  getMissionDetails(flightNumber: number) {
    return this.http.get(`https://api.spacexdata.com/v3/launches/${flightNumber}`);
  }
}
