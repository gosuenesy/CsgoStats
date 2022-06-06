import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITeam } from './iteam';
import { IPlayer } from './iplayer';
import { IResult } from './iresult';

@Injectable({
  providedIn: 'root'
})
export class CsgoService {

  constructor(private httpClient: HttpClient) { }

  public getTeams(): Observable<ITeam[]> { 
    return this.httpClient.get<ITeam[]>(`https://hltv-api.vercel.app/api/teams.json`)
    .pipe(map(teams => {
      return teams.map(team => {
        return {
          id: team.id,
          ranking: team.ranking,
          name: team.name,
          logo: team.logo,
          players: team.players
        } as ITeam;
      });
    }));
  }
  public getPlayers(): Observable<IPlayer[]> { 
    return this.httpClient.get<IPlayer[]>(`https://hltv-api.vercel.app/api/players.json`)
    .pipe(map(players => {
      return players.map(player => {
        return {
          id: player.id,
          team: player.team,
          nickname: player.nickname,
          slug: player.slug,
          mapsPlayed: player.mapsPlayed,
          kd: player.kd,
          rating: player.rating
        } as IPlayer;
      });
    }));
  }
  public getResults(): Observable<IResult[]> { 
    return this.httpClient.get<IResult[]>(`https://hltv-api.vercel.app/api/results.json`)
    .pipe(map(results => {
      return results.map(result => {
        return {
          event: result.event,
          maps: result.maps,
          time: result.time,
          teams: result.teams,
          matchId: result.matchId
        } as IResult;
      });
    }));
  }
}