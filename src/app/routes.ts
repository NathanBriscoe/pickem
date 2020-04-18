import { Routes } from '@angular/router';
import { WeeklyMatchupsComponent } from './weekly-matchups/weekly-matchups.component';
import { MatchupDetailsComponent } from './matchup-details/matchup-details.component';

export const appRoutes: Routes = [
  { path: 'weeks-matchup', component: WeeklyMatchupsComponent },
  { path: 'matchup/:id', component: MatchupDetailsComponent },
  { path: '', redirectTo: '/weeks-matchup', pathMatch: 'full'},
];
