import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarLimiteEmpleadoComponent } from './modal-editar-limite-empleado.component';

describe('ModalEditarLimiteEmpleadoComponent', () => {
  let component: ModalEditarLimiteEmpleadoComponent;
  let fixture: ComponentFixture<ModalEditarLimiteEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarLimiteEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarLimiteEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
