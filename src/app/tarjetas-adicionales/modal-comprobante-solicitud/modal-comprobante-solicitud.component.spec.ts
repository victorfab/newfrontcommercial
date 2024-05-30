import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComprobanteSolicitudComponent } from './modal-comprobante-solicitud.component';

describe('ModalComprobanteSolicitudComponent', () => {
  let component: ModalComprobanteSolicitudComponent;
  let fixture: ComponentFixture<ModalComprobanteSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComprobanteSolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComprobanteSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
