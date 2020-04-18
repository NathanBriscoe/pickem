import { Component, Input, OnInit } from '@angular/core';
import { IMatchupModel } from '../shared/models/matchup.model';
import { TeamService } from '../shared/services/team.service';

@Component({
  selector: 'app-matchup-details',
  templateUrl: './matchup-details.component.html',
  styleUrls: ['./matchup-details.component.scss']
})
export class MatchupDetailsComponent implements OnInit {
  @Input() matchup: IMatchupModel;
  selectedMatchUp: IMatchupModel;
  constructor(private teamService: TeamService) {
    this.selectedMatchUp = this.teamService.getMatchup(4); // ToDo: hard coded for now, will need to get this from the url later
  }

  ngOnInit(): void {
    console.log('matchup: ', this.matchup);
  }

}
