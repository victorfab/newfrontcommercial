import { TestBed } from '@angular/core/testing';

import { MovimientosUsuariosSubService } from './movimientos-usuarios-sub.service';

describe('MovimientosUsuariosSubService', () => {
  let service: MovimientosUsuariosSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimientosUsuariosSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
