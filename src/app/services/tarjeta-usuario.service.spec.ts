import { TestBed } from '@angular/core/testing';

import { TarjetaUsuarioService } from './tarjeta-usuario.service';

describe('TarjetaUsuarioService', () => {
  let service: TarjetaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarjetaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
