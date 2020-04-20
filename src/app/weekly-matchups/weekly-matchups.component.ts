import { Component, Input, OnInit } from '@angular/core';
import { IMatchupModel } from '../shared/models/matchup.model';
import { MatchupService } from '../shared/services/matchup.service';
import { TeamService } from '../shared/services/team.service';

@Component({
  selector: 'app-weekly-matchups',
  templateUrl: './weekly-matchups.component.html',
  styleUrls: ['./weekly-matchups.component.scss']
})
export class WeeklyMatchupsComponent implements OnInit {
    @Input() matchups: IMatchupModel[];

    constructor(private matchupService: MatchupService) {
      const teams = TeamService.getTeams();
      this.matchups = matchupService.getMatchUps(teams); // ToDo: determine which weekly matchups to get
    }

    ngOnInit(): void {

    }

}
