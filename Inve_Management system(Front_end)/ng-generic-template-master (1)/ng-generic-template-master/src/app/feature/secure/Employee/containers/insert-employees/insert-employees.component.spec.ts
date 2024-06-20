import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEmployeesComponent } from './insert-employees.component';

describe('InsertEmployeesComponent', () => {
  let component: InsertEmployeesComponent;
  let fixture: ComponentFixture<InsertEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
