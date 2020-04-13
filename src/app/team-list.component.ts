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
    const matchups = this.teamService.getMatchUps(this.teams);
    console.log('matchups: ' , matchups);
  }
}

