import { TestBed } from '@angular/core/testing';

import { TarjetaAreaService } from './tarjeta-area.service';

describe('TarjetaAreaService', () => {
  let service: TarjetaAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarjetaAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
