import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
})
export class MissionFilterComponent implements OnInit {
  years: number[] = [];
  selectedYear: string = "";
  missions: any[] = [];

  constructor(private spacexApiService: SpacexApiService) {
    const currentYear = new Date().getFullYear();
    for (let year = 2006; year <= currentYear; year++) {
      this.years.push(year);
    }
  }

  ngOnInit(): void {
    this.filterByYear()
  }

  filterByYear(): void {
    if (this.selectedYear && Number(this.selectedYear)) {
      this.spacexApiService.filterMissionsByYear(Number(this.selectedYear)).subscribe(data => {
        this.missions=data;
        console.log('filter',data);
      });
    } else {
      this.spacexApiService.getAllMissions().subscribe(data => {
        this.missions=data;
        console.log('all',data);
      });
    }
  }
}
