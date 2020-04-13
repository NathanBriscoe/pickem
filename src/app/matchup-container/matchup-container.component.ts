import { Component, Input, OnInit } from '@angular/core';
import { IMatchupModel } from '../shared/models/matchup.model';

@Component({
  selector: 'app-matchup-container',
  templateUrl: './matchup-container.component.html',
  styleUrls: ['./matchup-container.component.scss']
})
export class MatchupContainerComponent implements OnInit {
  @Input() matchup: IMatchupModel;
  constructor() { }

  ngOnInit(): void {
  }

}
