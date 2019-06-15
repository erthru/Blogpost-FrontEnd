import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincontentpostComponent } from './maincontentpost.component';

describe('MaincontentpostComponent', () => {
  let component: MaincontentpostComponent;
  let fixture: ComponentFixture<MaincontentpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincontentpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincontentpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
