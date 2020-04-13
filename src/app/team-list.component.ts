import { Component, Input } from '@angular/core';
import { ITeamModel } from './shared/models/team.model';

@Component({
  selector: 'app-team-list',
  templateUrl: 'team-list.component.html'
})
export class TeamListComponent {
  @Input() teams: ITeamModel[] = [];
}

