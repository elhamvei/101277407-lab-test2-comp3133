import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../network/spacexapi.service';
import { MatDialog } from '@angular/material/dialog';
import { MissionDetailsComponent } from '../missiondetails/missiondetails.component';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
})
export class MissionlistComponent implements OnInit {
  missions: any[] = [];

  constructor(private spacexApiService: SpacexApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.spacexApiService.getAllMissions().subscribe(data => {
      this.missions = data;
    });
  }

  openDialog(flight_number: any): void {
    this.dialog.open(MissionDetailsComponent, {
      data: { flight_number },
    });
  }

}
