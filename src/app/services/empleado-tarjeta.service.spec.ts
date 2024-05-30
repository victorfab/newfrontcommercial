import { TestBed } from '@angular/core/testing';

import { EmpleadoTarjetaService } from './empleado-tarjeta.service';

describe('EmpleadoTarjetaService', () => {
  let service: EmpleadoTarjetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoTarjetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
