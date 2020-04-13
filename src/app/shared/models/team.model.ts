export interface ITeamModel {
  id: number;
  name: string;
  shortName: string;
  imageUrl: string;
  isHome: boolean;
  record: {
    wins: number;
    losses: number;
    ties: number;
  };
}
