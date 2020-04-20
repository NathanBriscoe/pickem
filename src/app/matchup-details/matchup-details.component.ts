import { Component, Input, OnInit } from '@angular/core';
import { IMatchupModel } from '../shared/models/matchup.model';
import { ActivatedRoute } from '@angular/router';
import { MatchupService } from '../shared/services/matchup.service';

@Component({
  selector: 'app-matchup-details',
  templateUrl: './matchup-details.component.html',
  styleUrls: ['./matchup-details.component.scss']
})
export class MatchupDetailsComponent implements OnInit {
  @Input() matchup: IMatchupModel;
  selectedMatchUp: IMatchupModel;
  constructor(private matchupService: MatchupService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.selectedMatchUp = this.matchupService.getMatchup(
      +this.route.snapshot.params['id']
    ); // ToDo: hard coded for now, will need to get this from the url later
  }
}
