import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorNameComponent } from './doctor-name.component';

describe('DoctorNameComponent', () => {
  let component: DoctorNameComponent;
  let fixture: ComponentFixture<DoctorNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
