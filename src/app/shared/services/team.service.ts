import { ITeamModel } from '../models/team.model';
import { Injectable } from '@angular/core';
import {IMatchupModel, MatchupModel} from '../models/matchup.model';

@Injectable()
export class TeamService {
    static getRandomTeam(array): ITeamModel {
      const randomNumber = Math.floor(Math.random() * Math.floor(array.length));
      return array.splice(randomNumber, 1)[0];
    }

    static getTeams(): ITeamModel[] {
      return [{
        id: 1,
        name: 'Arizona Cardinals',
        state: 'Arizona',
        conference: 'NFC',
        division: 'West',
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
          conference: 'NFC',
          division: 'South',
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
          conference: 'AFC',
          division: 'North',
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
          conference: 'AFC',
          division: 'East',
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
          conference: 'NFC',
          division: 'South',
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
          conference: 'NFC',
          division: 'North',
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
          conference: 'AFC',
          division: 'North',
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
          conference: 'AFC',
          division: 'North',
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
          conference: 'NFC',
          division: 'East',
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
          conference: 'AFC',
          division: 'West',
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
          conference: 'NFC',
          division: 'North',
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
          conference: 'NFC',
          division: 'North',
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
          conference: 'AFC',
          division: 'South',
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
          conference: 'AFC',
          division: 'South',
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
          conference: 'AFC',
          division: 'South',
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
          conference: 'AFC',
          division: 'West',
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
          conference: 'AFC',
          division: 'West',
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
          conference: 'AFC',
          division: 'West',
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
          conference: 'NFC',
          division: 'West',
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
          conference: 'AFC',
          division: 'East',
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
          conference: 'NFC',
          division: 'North',
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
          conference: 'AFC',
          division: 'East',
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
          conference: 'NFC',
          division: 'South',
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
          conference: 'NFC',
          division: 'East',
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
          conference: 'AFC',
          division: 'East',
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
          conference: 'NFC',
          division: 'East',
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
          conference: 'AFC',
          division: 'North',
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
          conference: 'NFC',
          division: 'West',
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
          conference: 'NFC',
          division: 'West',
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
          conference: 'NFC',
          division: 'South',
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
          conference: 'AFC',
          division: 'South',
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
          conference: 'NFC',
          division: 'East',
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
