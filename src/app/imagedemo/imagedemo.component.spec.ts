import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagedemoComponent } from './imagedemo.component';

describe('ImagedemoComponent', () => {
  let component: ImagedemoComponent;
  let fixture: ComponentFixture<ImagedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
