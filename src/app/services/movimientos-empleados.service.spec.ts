import { TestBed } from '@angular/core/testing';

import { MovimientosEmpleadosService } from './movimientos-empleados.service';

describe('MovimientosEmpleadosService', () => {
  let service: MovimientosEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimientosEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
