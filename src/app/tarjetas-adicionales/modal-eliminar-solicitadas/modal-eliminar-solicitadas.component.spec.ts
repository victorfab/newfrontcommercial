import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarSolicitadasComponent } from './modal-eliminar-solicitadas.component';

describe('ModalEliminarSolicitadasComponent', () => {
  let component: ModalEliminarSolicitadasComponent;
  let fixture: ComponentFixture<ModalEliminarSolicitadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarSolicitadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarSolicitadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
