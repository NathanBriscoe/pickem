import { Injectable } from '@angular/core';
import { IMatchupModel, MatchupModel } from '../models/matchup.model';
import { ITeamModel } from '../models/team.model';
import { TeamService } from './team.service';

@Injectable()
export class MatchupService {
    getMatchUps(teams): IMatchupModel[] { // ToDo: remove this way of retrieving match ups for appropriate way
      const arrayOfTeams: IMatchupModel[] = teams;
      let homeTeam: ITeamModel;
      let awayTeam: ITeamModel;
      const matchups: IMatchupModel[] = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i <= 16; i++) {
        let matchup: MatchupModel = new MatchupModel();
        if (arrayOfTeams.length !== 0) {
          homeTeam = TeamService.getRandomTeam(arrayOfTeams);
          awayTeam = TeamService.getRandomTeam(arrayOfTeams);
          homeTeam.isHome = true;
          awayTeam.isHome = false;
          matchup.homeTeam = homeTeam;
          matchup.awayTeam = awayTeam;
          if (matchup) {
            matchup.id = i;
            matchup.spread = this.getRandomSpreadNumber(-20, 20);
            matchup.location = homeTeam.state;
            matchups.push(matchup);
            matchup = null;
          }
        }
      }
      return matchups;
    }

  private getRandomSpreadNumber(min, max): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  getMatchup(id: number) { // ToDo: this just creates a new matchup instead of retrieving the already created or retrieved one, fix this.
    const teams = TeamService.getTeams();
    const matchups = this.getMatchUps(teams);
    return matchups.find(matchup => matchup.id === id);
  }
}
