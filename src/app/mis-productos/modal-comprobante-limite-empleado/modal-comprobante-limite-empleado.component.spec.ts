import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComprobanteLimiteEmpleadoComponent } from './modal-comprobante-limite-empleado.component';

describe('ModalComprobanteLimiteEmpleadoComponent', () => {
  let component: ModalComprobanteLimiteEmpleadoComponent;
  let fixture: ComponentFixture<ModalComprobanteLimiteEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComprobanteLimiteEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComprobanteLimiteEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
