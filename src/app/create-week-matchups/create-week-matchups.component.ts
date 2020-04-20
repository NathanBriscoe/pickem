import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/services/team.service';
import { ITeamModel } from '../shared/models/team.model';

@Component({
  selector: 'app-create-week-matchups',
  templateUrl: './create-week-matchups.component.html',
  styleUrls: ['./create-week-matchups.component.scss']
})
export class CreateWeekMatchupsComponent implements OnInit {
  teams: ITeamModel[] = [];
  toggle: boolean = false;

  constructor() {
    // this.teams = TeamService.getTeams();
  }

  ngOnInit(): void {
    this.teams = TeamService.getTeams();

  }

  onCreateNewMatchup() {
    console.log('created new matchup');
    this.toggle = !this.toggle;
  }

}
