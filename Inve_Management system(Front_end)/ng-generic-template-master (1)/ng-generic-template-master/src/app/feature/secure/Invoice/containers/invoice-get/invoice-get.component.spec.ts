import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceGetComponent } from './invoice-get.component';

describe('InvoiceGetComponent', () => {
  let component: InvoiceGetComponent;
  let fixture: ComponentFixture<InvoiceGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
