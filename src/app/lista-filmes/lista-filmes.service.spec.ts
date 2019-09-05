import { TestBed } from '@angular/core/testing';

import { ListaFilmesService } from './lista-filmes.service';

describe('ListaFilmesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaFilmesService = TestBed.get(ListaFilmesService);
    expect(service).toBeTruthy();
  });
});
