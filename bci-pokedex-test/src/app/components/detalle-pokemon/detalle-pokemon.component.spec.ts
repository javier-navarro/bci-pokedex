import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

import { DetallePokemonComponent } from './detalle-pokemon.component';
import * as mock from 'src/app/mocks';

describe('DetallePokemonComponent', () => {
  let component: DetallePokemonComponent;
  let fixture: ComponentFixture<DetallePokemonComponent>;
  let pokemonServiceSpy: jasmine.SpyObj<PokemonServiceService>

  beforeEach(async () => {
    pokemonServiceSpy = jasmine.createSpyObj<PokemonServiceService>('PokemonServiceService', ['getDetallePokemon', 'getLocalizacionPokemon']);
    await TestBed.configureTestingModule({
      declarations: [ DetallePokemonComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: PokemonServiceService, useValue: pokemonServiceSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePokemonComponent);
    component = fixture.componentInstance;
    pokemonServiceSpy.getDetallePokemon.and.returnValue(of(mock.MOCK_DETALLE_POKEMON));
    pokemonServiceSpy.getLocalizacionPokemon.and.returnValue(of(mock.MOCK_LOCALIZACION_POKEMON));
    fixture.detectChanges();
  });

  it('creacion del componente', () => {
    expect(component).toBeTruthy();
  });

  it('llamado consultaUbicacion branch', fakeAsync(()=> {
    pokemonServiceSpy.getLocalizacionPokemon.and.returnValue(throwError(mock.ERROR_404));
    component.consultaUbicacion();
    flush();
    expect(component.errorLocalicacionPokemon).toEqual('Error al obtener la ubicación de este pokemon!');
  }));

  it('llamado consultaDetallePokemon branch', fakeAsync(()=> {
    pokemonServiceSpy.getDetallePokemon.and.returnValue(throwError(mock.ERROR_404));
    component.consultaDetallePokemon();
    flush();
    expect(component.spinnerConsultaDetalle).toEqual(false);
  }));

  it('llamado consultaDetallePokemon', fakeAsync(()=> {
    pokemonServiceSpy.getDetallePokemon.and.returnValue(of(mock.MOCK_DETALLE_POKEMON));
    component.consultaDetallePokemon();
    flush();
    expect(pokemonServiceSpy.getDetallePokemon).toHaveBeenCalled();
  }));

  // consultaDetallePokemon
});
