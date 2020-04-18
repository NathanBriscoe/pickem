import { ITeamModel } from '../models/team.model';
import { Injectable } from '@angular/core';
import {IMatchupModel, MatchupModel} from '../models/matchup.model';

@Injectable()
export class TeamService {
    getMatchUps(teams): IMatchupModel[] { // ToDo: remove this way of retrieving match ups for appropriate way
      const array = teams;
      let team;
      let team2;
      const matchups = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i <= 16; i++) {
        let matchup: MatchupModel = new MatchupModel();
        if (array.length !== 0) {
          team = this.getRandomTeam(array);
          team2 = this.getRandomTeam(array);
          team.isHome = true;
          team2.isHome = false;
          matchup.homeTeam = team;
          matchup.awayTeam = team2;
          if (matchup) {
            matchup.id = i;
            matchups.push(matchup);
            matchup = null;
          }
        }
      }
      return matchups;
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
