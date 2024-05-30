import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoTarjetaComponent } from './credito-tarjeta.component';

describe('CreditoTarjetaComponent', () => {
  let component: CreditoTarjetaComponent;
  let fixture: ComponentFixture<CreditoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditoTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
