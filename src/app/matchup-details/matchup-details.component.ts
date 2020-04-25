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

  todaysDate: string;
  buildDate: Date = new Date();
  day: string;
  month: string;
  date: string;
  matchupTitle: string;
  constructor(private matchupService: MatchupService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];

    this.day = days[this.buildDate.getDay()].toString();
    this.month = months[this.buildDate.getMonth()].toString();
    this.date = this.buildDate.getDate().toString();
    this.todaysDate = this.day + ', ' + this.month + '. ' + this.date;
    this.selectedMatchUp = this.matchupService.getMatchup(
      +this.route.snapshot.params['id']
    ); // ToDo: hard coded for now, will need to get this from the url later

    this.matchupTitle = this.matchup.awayTeam.shortName + ' at ' + this.matchup.homeTeam.shortName;
  }
}
