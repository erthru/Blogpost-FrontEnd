import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpostshowComponent } from './adminpostshow.component';

describe('AdminpostshowComponent', () => {
  let component: AdminpostshowComponent;
  let fixture: ComponentFixture<AdminpostshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpostshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpostshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
