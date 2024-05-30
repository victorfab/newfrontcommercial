import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradoUsuariosComponent } from './filtrado-usuarios.component';

describe('FiltradoUsuariosComponent', () => {
  let component: FiltradoUsuariosComponent;
  let fixture: ComponentFixture<FiltradoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltradoUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltradoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
