import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PokemonServiceService } from './pokemon-service.service';

describe('PokemonServiceService', () => {
  let service: PokemonServiceService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(() => {
    TestBed.configureTestingModule({});
    //service = TestBed.inject(PokemonServiceService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PokemonServiceService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
