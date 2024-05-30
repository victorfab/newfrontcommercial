import { TestBed } from '@angular/core/testing';

import { TarjetasAsignadasService } from './tarjetas-asignadas.service';

describe('TarjetasAsignadasService', () => {
  let service: TarjetasAsignadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarjetasAsignadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
