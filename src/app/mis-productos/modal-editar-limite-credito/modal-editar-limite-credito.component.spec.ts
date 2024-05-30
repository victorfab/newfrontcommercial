import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarLimiteCreditoComponent } from './modal-editar-limite-credito.component';

describe('ModalEditarLimiteCreditoComponent', () => {
  let component: ModalEditarLimiteCreditoComponent;
  let fixture: ComponentFixture<ModalEditarLimiteCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarLimiteCreditoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarLimiteCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
