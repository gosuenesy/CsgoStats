import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerServiceComponent } from './player-service/player-service.component';
import { TeamServiceComponent } from './team-service/team-service.component';
import { ResultServiceComponent } from './result-service/result-service.component';

const routes: Routes = [
  { path: 'player-service', component: PlayerServiceComponent },
  { path: 'team-service', component: TeamServiceComponent },
  { path: 'result-service', component: ResultServiceComponent },
  { path: '', redirectTo: '/team-service', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
