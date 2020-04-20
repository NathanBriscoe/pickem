import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWeekMatchupsComponent } from './create-week-matchups.component';

describe('CreateWeekMatchupsComponent', () => {
  let component: CreateWeekMatchupsComponent;
  let fixture: ComponentFixture<CreateWeekMatchupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWeekMatchupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWeekMatchupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
