import { TestBed } from '@angular/core/testing';

import { TarjetaUsuariosSubService } from './tarjeta-usuarios-sub.service';

describe('TarjetaUsuariosSubService', () => {
  let service: TarjetaUsuariosSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarjetaUsuariosSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
