import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSupertokenLimiteEmpleadoComponent } from './modal-supertoken-limite-empleado.component';

describe('ModalSupertokenLimiteEmpleadoComponent', () => {
  let component: ModalSupertokenLimiteEmpleadoComponent;
  let fixture: ComponentFixture<ModalSupertokenLimiteEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSupertokenLimiteEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSupertokenLimiteEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
