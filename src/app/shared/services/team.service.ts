import { ITeamModel } from '../models/team.model';
import { Injectable } from '@angular/core';
import {IMatchupModel, MatchupModel} from '../models/matchup.model';

@Injectable()
export class TeamService {
    getMatchUps(teams): IMatchupModel[] { // ToDo: remove this way of retrieving match ups for appropriate way
      const arrayOfTeams: IMatchupModel[] = teams;
      let homeTeam: ITeamModel;
      let awayTeam: ITeamModel;
      const matchups: IMatchupModel[] = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i <= 16; i++) {
        let matchup: MatchupModel = new MatchupModel();
        if (arrayOfTeams.length !== 0) {
          homeTeam = this.getRandomTeam(arrayOfTeams);
          awayTeam = this.getRandomTeam(arrayOfTeams);
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
      const teams = this.getTeams();
      const matchups = this.getMatchUps(teams);
      return matchups.find(matchup => matchup.id === id);
    }

    private getRandomTeam(array): ITeamModel {
      const randomNumber = Math.floor(Math.random() * Math.floor(array.length));
      return array.splice(randomNumber, 1)[0];
    }

    getTeams(): ITeamModel[] {
      return [{
        id: 1,
        name: 'Arizona Cardinals',
        state: 'Arizona',
        shortName: 'Cardinals',
        imageUrl: '/assets/images/Cardinals',
        isHome: null,
        record: {
          wins: 0,
          losses: 0,
          ties: 0
        }
      },
        {
          id: 2,
          name: 'Atlanta Falcons',
          state: 'Atlanta',
          shortName: 'Falcons',
          imageUrl: '/assets/images/Falcons',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 3,
          name: 'Baltimore Ravens',
          state: 'Maryland',
          shortName: 'Ravens',
          imageUrl: '/assets/images/Ravens',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 4,
          name: 'Buffalo Bills',
          state: 'New York',
          shortName: 'Bills',
          imageUrl: '/assets/images/Bills',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 5,
          name: 'Carolina Panthers',
          state: 'South Carolina',
          shortName: 'Panthers',
          imageUrl: '/assets/images/Panthers',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 6,
          name: 'Chicago Bears',
          state: 'Illinois',
          shortName: 'Bears',
          imageUrl: '/assets/images/Bears',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 7,
          name: 'Cincinnati Bengals',
          state: 'Ohio',
          shortName: 'Bengals',
          imageUrl: '/assets/images/Bengals',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 8,
          name: 'Cleveland Browns',
          state: 'Ohio',
          shortName: 'Browns',
          imageUrl: '/assets/images/Browns',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 9,
          name: 'Dallas Cowboys',
          state: 'Texas',
          shortName: 'Cowboys',
          imageUrl: '/assets/images/Cowboys',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 10,
          name: 'Denver Broncos',
          state: 'Colorado',
          shortName: 'Broncos',
          imageUrl: '/assets/images/Broncos',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 11,
          name: 'Detroit Lions',
          state: 'Michigan',
          shortName: 'Lions',
          imageUrl: '/assets/images/Lions',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 12,
          name: 'Green Bay Packers',
          state: 'Wisconsin',
          shortName: 'Packers',
          imageUrl: '/assets/images/Packers',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 13,
          name: 'Houston Texans',
          state: 'Texas',
          shortName: 'Texans',
          imageUrl: '/assets/images/Texans',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 14,
          name: 'Indianapolis Colts',
          state: 'Indiana',
          shortName: 'Colts',
          imageUrl: '/assets/images/Colts',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 15,
          name: 'Jacksonville Jaguars',
          state: 'Florida',
          shortName: 'Jaguars',
          imageUrl: '/assets/images/Jaguars',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 16,
          name: 'Kansas City Chiefs',
          state: 'Missouri',
          shortName: 'Chiefs',
          imageUrl: '/assets/images/Chiefs',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 17,
          name: 'Las Vegas Raiders',
          state: 'Nevada',
          shortName: 'Raiders',
          imageUrl: '/assets/images/Raiders',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 18,
          name: 'Los Angeles Chargers',
          state: 'California',
          shortName: 'Chargers',
          imageUrl: '/assets/images/Chargers',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 19,
          name: 'Los Angeles Rams',
          state: 'California',
          shortName: 'Rams',
          imageUrl: '/assets/images/Rams',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 20,
          name: 'Miami Dolphins',
          state: 'Florida',
          shortName: 'Dolphins',
          imageUrl: '/assets/images/Dolphins',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 21,
          name: 'Minnesota Vikings',
          state: 'Minnesota',
          shortName: 'Vikings',
          imageUrl: '/assets/images/Vikings',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 22,
          name: 'New England Patriots',
          state: 'New England',
          shortName: 'Patriots',
          imageUrl: '/assets/images/Patriots',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 23,
          name: 'New Orleans Saints',
          state: 'Louisiana',
          shortName: 'Saints',
          imageUrl: '/assets/images/Saints',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 24,
          name: 'New York Giants',
          state: 'New York',
          shortName: 'Giants',
          imageUrl: '/assets/images/Giants',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 25,
          name: 'New York Jets',
          state: 'New York',
          shortName: 'Jets',
          imageUrl: '/assets/images/Jets',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 26,
          name: 'Philadelphia Eagles',
          state: 'Philadelphia',
          shortName: 'Eagles',
          imageUrl: '/assets/images/Eagles',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 27,
          name: 'Pittsburgh Steelers',
          state: 'Pittsburgh',
          shortName: 'Steelers',
          imageUrl: '/assets/images/Steelers',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 28,
          name: 'San Francisco 49ers',
          state: 'California',
          shortName: '49ers',
          imageUrl: '/assets/images/49ers',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 29,
          name: 'Seattle Seahawks',
          state: 'Washington',
          shortName: 'Seahawks',
          imageUrl: '/assets/images/Seahawks',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 30,
          name: 'Tampa Bay Buccaneers',
          state: 'Florida',
          shortName: 'Buccaneers',
          imageUrl: '/assets/images/Buccaneers',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 31,
          name: 'Tennessee Titans',
          state: 'Tennessee',
          shortName: 'Titans',
          imageUrl: '/assets/images/Titans',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
        {
          id: 32,
          name: 'Washington Redskins',
          state: 'Washington',
          shortName: 'Redskins',
          imageUrl: '/assets/images/Redskins',
          isHome: null,
          record: {
            wins: 0,
            losses: 0,
            ties: 0
          }
        },
      ];
    }
}
