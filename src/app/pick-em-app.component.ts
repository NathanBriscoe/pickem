import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'pick-em-app',
    templateUrl: './pick-em-app.component.html',
    styleUrls: ['./pick-em-app.component.scss']
})
export class PickEmAppComponent {
  @Input() teams: any;
  title = 'Pick\'em';
  user = {
        id: 1,
        name: 'Nathan',
        email: 'n.briscoe1@gmail.com',
        isAdmin: true,
        league: {
            id: 123,
            name: 'first season league name',
        }
    };
}
