import { Component, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
})
export class MissionlistComponent implements OnInit {
  missions: any[] = [];

  constructor(private missionService: MissionService) { }

  ngOnInit(): void {
    this.missionService.getAllMissions().subscribe(data => {
      this.missions = data;
    });
  }
}
