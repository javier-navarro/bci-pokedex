import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { PokemonServiceService } from './pokemon-service.service';
import * as mock from 'src/app/mocks';


describe('PokemonServiceService', () => {
  let service: PokemonServiceService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PokemonServiceService(httpClientSpy as any);
  });

  it('Creado con exito', () => {
    expect(service).toBeTruthy();
  });

  it('Ejecuta consulta detalle pokemon', () => {
    httpClientSpy.get.and.returnValue(of(mock.MOCK_DETALLE_POKEMON));
    service.getDetallePokemon(3).
      subscribe(resultado =>{
        expect(resultado).toEqual(mock.MOCK_DETALLE_POKEMON);
      });
  });

  it('Ejecuta consulta pokemones ', () => {
    httpClientSpy.get.and.returnValue(of(mock.DATA_SIN_CONEXION.results));
    service.getAllPokemones().
      subscribe(resultado =>{
        expect(resultado).toEqual(mock.DATA_SIN_CONEXION.results);
      });
  });

  it('Ejecuta consulta pokemones con ERROR', () => {
    httpClientSpy.get.and.returnValue(throwError(mock.ERROR_404));
    service.getAllPokemones().
      subscribe(resultado =>{
        expect(resultado).toEqual(mock.DATA_SIN_CONEXION.results);
      }, (error: any) => { 
        expect(error.status).toEqual(404);
      });
  });

  it('Ejecuta consulta obtenerDataHome() ', () => {
    httpClientSpy.get.and.returnValue(of(mock.MOCK_OBTENER_DATA));
    service.obtenerDataHome();
    expect(service.obtenerDataHome).toBeTruthy();
  });
});
