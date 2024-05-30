import { TestBed } from '@angular/core/testing';

import { StatusEnvioRealizadoService } from './status-envio-realizado.service';

describe('StatusEnvioRealizadoService', () => {
  let service: StatusEnvioRealizadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusEnvioRealizadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
