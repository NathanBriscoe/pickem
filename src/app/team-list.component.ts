import {Component, Input, OnInit} from '@angular/core';
import {ITeamModel} from './shared/models/team.model';
import {TeamService} from './shared/services/team.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'team-list',
  templateUrl: 'team-list.component.html'
})
export class TeamListComponent implements OnInit {
  @Input() teams: ITeamModel[] = [];

  constructor(private teamService: TeamService) {

  }

  ngOnInit(): void {
    this.teams = this.teamService.getTeams();
    this.getMatchUps();
  }

  private getMatchUps() {
    const array = this.teams;
    let team;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i <= 31; i++) {
      team = this.getRandomTeam(array);
      console.log('team: ', team);

    }
  }

  private getRandomTeam(array): ITeamModel {
    const randomNumber = Math.floor(Math.random() * Math.floor(array.length));
    return array.splice(randomNumber, 1)[0];
  }
}

