import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcedenteLimiteComponent } from './modal-excedente-limite.component';

describe('ModalExcedenteLimiteComponent', () => {
  let component: ModalExcedenteLimiteComponent;
  let fixture: ComponentFixture<ModalExcedenteLimiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExcedenteLimiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExcedenteLimiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
