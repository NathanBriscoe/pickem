import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupContainerComponent } from './matchup-container.component';

describe('MatchupContainerComponent', () => {
  let component: MatchupContainerComponent;
  let fixture: ComponentFixture<MatchupContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchupContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
