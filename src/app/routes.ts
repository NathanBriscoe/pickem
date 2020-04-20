import { Routes } from '@angular/router';
import { WeeklyMatchupsComponent } from './weekly-matchups/weekly-matchups.component';
import { MatchupDetailsComponent } from './matchup-details/matchup-details.component';
import { CreateWeekMatchupsComponent } from './create-week-matchups/create-week-matchups.component';

export const appRoutes: Routes = [
  { path: 'create-matchups', component: CreateWeekMatchupsComponent },
  { path: 'weeks-matchup', component: WeeklyMatchupsComponent },
  { path: 'matchup/:id', component: MatchupDetailsComponent },
  { path: '', redirectTo: '/weeks-matchup', pathMatch: 'full'},
];
