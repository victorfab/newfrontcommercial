import { TestBed } from '@angular/core/testing';

import { StatusEntregadasService } from './status-entregadas.service';

describe('StatusEntregadasService', () => {
  let service: StatusEntregadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusEntregadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
