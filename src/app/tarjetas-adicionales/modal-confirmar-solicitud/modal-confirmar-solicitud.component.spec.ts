import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmarSolicitudComponent } from './modal-confirmar-solicitud.component';

describe('ModalConfirmarSolicitudComponent', () => {
  let component: ModalConfirmarSolicitudComponent;
  let fixture: ComponentFixture<ModalConfirmarSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmarSolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfirmarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
