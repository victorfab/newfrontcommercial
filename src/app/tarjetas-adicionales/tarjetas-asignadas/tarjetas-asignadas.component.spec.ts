import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasAsignadasComponent } from './tarjetas-asignadas.component';

describe('TarjetasAsignadasComponent', () => {
  let component: TarjetasAsignadasComponent;
  let fixture: ComponentFixture<TarjetasAsignadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasAsignadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasAsignadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
