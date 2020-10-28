import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentcategoryComponent } from './tournamentcategory.component';

describe('TournamentcategoryComponent', () => {
  let component: TournamentcategoryComponent;
  let fixture: ComponentFixture<TournamentcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
