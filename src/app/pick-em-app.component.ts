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
  title = 'Pick\'em';
  matchups: IMatchupModel[];
  user: IUserModel = {
      id: 1,
      name: 'Nathan',
      email: 'n.briscoe1@gmail.com',
      password: '12345',
      isAdmin: true,
    };

  constructor() {

  }

  ngOnInit() {

  }
}
