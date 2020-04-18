import { Component, OnInit } from '@angular/core';
import { IMatchupModel } from '../shared/models/matchup.model';
import { IUserModel } from '../shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Pick\'em';
  matchups: IMatchupModel[];
  user: IUserModel = {
    id: 1,
    name: 'Nathan',
    email: 'n.briscoe@gmail.com',
    password: '123',
    isAdmin: true,
    isValid: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
