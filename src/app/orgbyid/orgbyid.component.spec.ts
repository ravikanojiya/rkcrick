import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgbyidComponent } from './orgbyid.component';

describe('OrgbyidComponent', () => {
  let component: OrgbyidComponent;
  let fixture: ComponentFixture<OrgbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
