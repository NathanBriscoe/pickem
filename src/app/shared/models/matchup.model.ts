import { ITeamModel } from './team.model';

export interface IMatchupModel {
  id: number;
  location: string;
  startDateTime: string;
  homeTeam: ITeamModel;
  awayTeam: ITeamModel;

}
