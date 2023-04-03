import { Component, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
})
export class MissionFilterComponent implements OnInit {
  years: number[] = [];
  selectedYear: string = "";
  missions: any[] = [];

  constructor(private missionService: MissionService) {
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
      this.missionService.filterMissionsByYear(Number(this.selectedYear)).subscribe(data => {
        this.missions=data;
        console.log('filter',data);
      });
    } else {
      this.missionService.getAllMissions().subscribe(data => {
        this.missions=data;
        console.log('all',data);
      });
    }
  }
}
