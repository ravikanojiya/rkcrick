import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentregComponent } from './tournamentreg.component';

describe('TournamentregComponent', () => {
  let component: TournamentregComponent;
  let fixture: ComponentFixture<TournamentregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
