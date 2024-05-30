import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComprobanteLimiteAreaComponent } from './modal-comprobante-limite-area.component';

describe('ModalComprobanteLimiteAreaComponent', () => {
  let component: ModalComprobanteLimiteAreaComponent;
  let fixture: ComponentFixture<ModalComprobanteLimiteAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComprobanteLimiteAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComprobanteLimiteAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
