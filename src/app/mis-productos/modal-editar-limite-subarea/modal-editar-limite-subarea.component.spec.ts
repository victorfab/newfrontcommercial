import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarLimiteSubareaComponent } from './modal-editar-limite-subarea.component';

describe('ModalEditarLimiteSubareaComponent', () => {
  let component: ModalEditarLimiteSubareaComponent;
  let fixture: ComponentFixture<ModalEditarLimiteSubareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarLimiteSubareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarLimiteSubareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
