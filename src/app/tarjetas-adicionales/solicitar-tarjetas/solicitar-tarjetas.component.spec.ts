import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarTarjetasComponent } from './solicitar-tarjetas.component';

describe('SolicitarTarjetasComponent', () => {
  let component: SolicitarTarjetasComponent;
  let fixture: ComponentFixture<SolicitarTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarTarjetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
