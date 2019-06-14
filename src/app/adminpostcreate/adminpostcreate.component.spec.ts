import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpostcreateComponent } from './adminpostcreate.component';

describe('AdminpostcreateComponent', () => {
  let component: AdminpostcreateComponent;
  let fixture: ComponentFixture<AdminpostcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpostcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpostcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
