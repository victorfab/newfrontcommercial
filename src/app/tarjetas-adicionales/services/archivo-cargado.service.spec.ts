import { TestBed } from '@angular/core/testing';

import { ArchivoCargadoService } from './archivo-cargado.service';

describe('ArchivoCargadoService', () => {
  let service: ArchivoCargadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivoCargadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
