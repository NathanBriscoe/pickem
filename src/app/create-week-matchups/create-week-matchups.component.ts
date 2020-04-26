import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/services/team.service';
import { ITeamModel } from '../shared/models/team.model';

@Component({
  selector: 'app-create-week-matchups',
  templateUrl: './create-week-matchups.component.html',
  styleUrls: ['./create-week-matchups.component.scss']
})
export class CreateWeekMatchupsComponent implements OnInit {
  teams: ITeamModel[];
  toggle: boolean = false;
  NFCNorthTeams: ITeamModel[] = [];
  NFCEastTeams: ITeamModel[] = [];
  NFCWestTeams: ITeamModel[] = [];
  NFCSouthTeams: ITeamModel[] = [];
  AFCNorthTeams: ITeamModel[] = [];
  AFCEastTeams: ITeamModel[] = [];
  AFCWestTeams: ITeamModel[] = [];
  AFCSouthTeams: ITeamModel[] = [];
  constructor() {
    this.teams = TeamService.getTeams();
    this.teams.map(team => {
      console.log('team: ' , team);
      if (team.conference !== 'NFC') {
        switch (team.division) {
          case 'North':
            this.AFCNorthTeams.push(team);
            break;
          case 'East':
            this.AFCEastTeams.push(team);
            break;
          case 'West':
            this.AFCWestTeams.push(team);
            break;
          case 'South':
            this.AFCSouthTeams.push(team);
        }
      } else {
        switch (team.division) {
          case 'North':
            this.NFCNorthTeams.push(team);
            break;
          case 'East':
            this.NFCEastTeams.push(team);
            break;
          case 'West':
            this.NFCWestTeams.push(team);
            break;
          case 'South':
            this.NFCSouthTeams.push(team);
        }
      }
    });
    // this.matchups = matchupService.getMatchUps(this.teams); // ToDo: determine which weekly matchups to get
  }

  ngOnInit(): void {
    this.teams = TeamService.getTeams();

  }

  onCreateNewMatchup() {
    console.log('created new matchup');
    this.toggle = !this.toggle;
  }

}
