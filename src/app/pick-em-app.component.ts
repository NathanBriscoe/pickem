import {Component, Input, OnInit} from '@angular/core';
import { TeamService } from './shared/services/team.service';
import { IMatchupModel } from './shared/models/matchup.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-pick-em',
    templateUrl: './pick-em-app.component.html',
    styleUrls: ['./pick-em-app.component.scss']
})
export class PickEmAppComponent implements OnInit {
  @Input() teams: any;
  title = 'Pick\'em';
  matchups: IMatchupModel[];
  user = {
        id: 1,
        name: 'Nathan',
        email: 'n.briscoe1@gmail.com',
        isAdmin: true,
        league: {
            id: 123,
            name: 'first season league name',
        }
    };
  spread: number;

  constructor(private teamService: TeamService) {
    const teams = teamService.getTeams();
    const test = teamService.getMatchUps(teams);
    console.log('test: ', test);
    this.matchups = test;
  }

  ngOnInit() {

  }
}
