import { Component, OnInit } from '@angular/core';
import { ITeam } from '../iteam';
import { CsgoService } from '../csgo.service';

@Component({
  selector: 'app-team-service',
  templateUrl: './team-service.component.html',
  styleUrls: ['./team-service.component.css']
})
export class TeamServiceComponent implements OnInit {

  teams: ITeam[] = [];

  constructor(service: CsgoService) { service.getTeams().subscribe(response => this.teams = response) }

  ngOnInit(): void {
  }

}
