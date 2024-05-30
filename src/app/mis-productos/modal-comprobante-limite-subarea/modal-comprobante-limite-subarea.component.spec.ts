import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComprobanteLimiteSubareaComponent } from './modal-comprobante-limite-subarea.component';

describe('ModalComprobanteLimiteSubareaComponent', () => {
  let component: ModalComprobanteLimiteSubareaComponent;
  let fixture: ComponentFixture<ModalComprobanteLimiteSubareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComprobanteLimiteSubareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComprobanteLimiteSubareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
