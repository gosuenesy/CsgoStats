import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TeamServiceComponent } from './team-service/team-service.component';
import { CsgoService } from './csgo.service';
import { PlayerServiceComponent } from './player-service/player-service.component';
import { ResultServiceComponent } from './result-service/result-service.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamServiceComponent,
    PlayerServiceComponent,
    ResultServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CsgoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
