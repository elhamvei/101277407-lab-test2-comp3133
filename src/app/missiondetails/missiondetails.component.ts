import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
})
export class MissiondetailsComponent implements OnInit {
  @Input() mission: any;

  constructor() { }

  ngOnInit(): void {
  }
}
