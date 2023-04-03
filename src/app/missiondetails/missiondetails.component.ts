import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpacexApiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
})
export class MissionDetailsComponent implements OnInit {
  mission: any;

  constructor(private dialogRef: MatDialogRef<MissionDetailsComponent>, 
    private spacexApiService: SpacexApiService,  
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.spacexApiService.getMissionDetails(Number(this.data.flight_number)).subscribe(data => {
      this.mission = data;
      console.log('mission', data);
    });
  }
  
  closeDialog(): void {
    this.dialogRef.close();
  }
}
