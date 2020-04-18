import { Component, OnInit} from '@angular/core';
import { TeamService } from './shared/services/team.service';
import { IMatchupModel } from './shared/models/matchup.model';
import { IUserModel } from './shared/models/user.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-pick-em',
    templateUrl: './pick-em-app.component.html',
    styleUrls: ['./pick-em-app.component.scss']
})
export class PickEmAppComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }
}
