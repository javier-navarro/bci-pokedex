
import { FiltroBusquedaPipe } from './../../pipes/filtro-busqueda.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import * as mock from 'src/app/mocks';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let pokemonServiceSpy: jasmine.SpyObj<PokemonServiceService>

  beforeEach(async () => {
    pokemonServiceSpy = jasmine.createSpyObj<PokemonServiceService>('PokemonServiceService', ['obtenerDataHome']);
    await TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        FiltroBusquedaPipe
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: PokemonServiceService, useValue: pokemonServiceSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    pokemonServiceSpy.obtenerDataHome.and.returnValue(of(mock.DATA_SIN_CONEXION.results))
    fixture.detectChanges();
  });

  it('creacion componente con exito', () => {
    expect(component).toBeTruthy();
  });

  it('llamado alertaConsultaSinDatos', () => {
    component.alertaConsultaSinDatos();
    expect(component.alertaConsultaSinDatos).toBeTruthy();
  });

  it('llamado consultaData', fakeAsync(() => {
    pokemonServiceSpy.obtenerDataHome.and.returnValue(of(mock.DATA_SIN_CONEXION.results));
    component.consultaData();
    flush();
    expect(pokemonServiceSpy.obtenerDataHome).toHaveBeenCalled();
  }));

  it('llamado consultaData branch', fakeAsync(() => {
    const arregloVacio:any = [];
    component.llegadaPokemones = pokemonServiceSpy.obtenerDataHome.and.returnValue(of(arregloVacio));
    component.alertaConsultaSinDatos();
    flush();
    expect(component.llegadaPokemones.length).toEqual(0);
  }));
});
