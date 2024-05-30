import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoTarjetasComponent } from './contenido-tarjetas.component';

describe('ContenidoTarjetasComponent', () => {
  let component: ContenidoTarjetasComponent;
  let fixture: ComponentFixture<ContenidoTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoTarjetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
