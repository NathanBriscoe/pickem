import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PickEmAppRoutingModule } from './pick-em-app-routing.module';
import { PickEmAppComponent } from './pick-em-app.component';
import { TeamListComponent } from './team-list.component';
import { TeamService } from './shared/services/team.service';
import { MatchupContainerComponent } from './matchup-container/matchup-container.component';

@NgModule({
  declarations: [
    PickEmAppComponent,
    TeamListComponent,
    MatchupContainerComponent
  ],
  imports: [
    BrowserModule,
    PickEmAppRoutingModule
  ],
  providers: [TeamService],
  bootstrap: [PickEmAppComponent]
})
export class PickEmAppModule { }
