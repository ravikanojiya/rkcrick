import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerroleComponent } from './playerrole.component';

describe('PlayerroleComponent', () => {
  let component: PlayerroleComponent;
  let fixture: ComponentFixture<PlayerroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
