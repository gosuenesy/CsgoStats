import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../iplayer';
import { CsgoService } from '../csgo.service';


@Component({
  selector: 'app-player-service',
  templateUrl: './player-service.component.html',
  styleUrls: ['./player-service.component.css']
})
export class PlayerServiceComponent implements OnInit {

  players: IPlayer[] = [];

  constructor(service: CsgoService) { service.getPlayers().subscribe(response => this.players = response); }

  ngOnInit(): void {
  }

}
