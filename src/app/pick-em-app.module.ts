import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { PickEmAppComponent } from './pick-em-app.component';
import { MatchupDetailsComponent } from './matchup-details/matchup-details.component';
import { WeeklyMatchupsComponent } from './weekly-matchups/weekly-matchups.component';
import { PickEmAppRoutingModule } from './pick-em-app-routing.module';
import { TeamService } from './shared/services/team.service';
import { appRoutes } from './routes';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    PickEmAppComponent,
    MatchupDetailsComponent,
    WeeklyMatchupsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    PickEmAppRoutingModule
  ],
  providers: [TeamService],
  bootstrap: [PickEmAppComponent]
})
export class PickEmAppModule { }
