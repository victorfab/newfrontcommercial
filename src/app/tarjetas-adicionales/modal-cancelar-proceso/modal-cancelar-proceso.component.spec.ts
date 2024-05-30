import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCancelarProcesoComponent } from './modal-cancelar-proceso.component';

describe('ModalCancelarProcesoComponent', () => {
  let component: ModalCancelarProcesoComponent;
  let fixture: ComponentFixture<ModalCancelarProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCancelarProcesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCancelarProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
