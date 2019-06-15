import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincontentpostshowComponent } from './maincontentpostshow.component';

describe('MaincontentpostshowComponent', () => {
  let component: MaincontentpostshowComponent;
  let fixture: ComponentFixture<MaincontentpostshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincontentpostshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincontentpostshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
