import { ITeamModel } from './team.model';

export class MatchupModel {
  id: number;
  location: string;
  startDateTime: string;
  homeTeam: ITeamModel;
  awayTeam: ITeamModel;
}

export interface IMatchupModel {
  id: number;
  location: string;
  startDateTime: string;
  homeTeam: ITeamModel;
  awayTeam: ITeamModel;

}
