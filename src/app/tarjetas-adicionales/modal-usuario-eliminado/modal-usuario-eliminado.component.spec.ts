import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUsuarioEliminadoComponent } from './modal-usuario-eliminado.component';

describe('ModalUsuarioEliminadoComponent', () => {
  let component: ModalUsuarioEliminadoComponent;
  let fixture: ComponentFixture<ModalUsuarioEliminadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUsuarioEliminadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUsuarioEliminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
