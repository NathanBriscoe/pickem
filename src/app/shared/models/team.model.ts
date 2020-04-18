import { TeamRecordModel } from './team-record.model';

export interface ITeamModel {
  id: number;
  name: string;
  state: string;
  shortName: string;
  imageUrl: string;
  isHome: boolean;
  record: TeamRecordModel;
}
