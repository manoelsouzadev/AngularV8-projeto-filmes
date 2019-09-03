import { TestBed } from '@angular/core/testing';

import { FilmeDetalhesService } from './filme-detalhes.service';

describe('FilmeDetalhesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmeDetalhesService = TestBed.get(FilmeDetalhesService);
    expect(service).toBeTruthy();
  });
});
