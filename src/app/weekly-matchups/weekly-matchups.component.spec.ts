import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyMatchupsComponent } from './weekly-matchups.component';

describe('WeeklyMatchupsComponent', () => {
  let component: WeeklyMatchupsComponent;
  let fixture: ComponentFixture<WeeklyMatchupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyMatchupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyMatchupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
