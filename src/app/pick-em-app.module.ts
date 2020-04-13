import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PickEmAppRoutingModule } from './pick-em-app-routing.module';
import { PickEmAppComponent } from './pick-em-app.component';
import { TeamListComponent } from './team-list.component';
import { TeamService } from './shared/services/team.service';

@NgModule({
  declarations: [
    PickEmAppComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule,
    PickEmAppRoutingModule
  ],
  providers: [TeamService],
  bootstrap: [PickEmAppComponent]
})
export class PickEmAppModule { }
