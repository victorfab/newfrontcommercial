import { TestBed } from '@angular/core/testing';

import { TarjetaSubareaService } from './tarjeta-subarea.service';

describe('TarjetaSubareaService', () => {
  let service: TarjetaSubareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarjetaSubareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
