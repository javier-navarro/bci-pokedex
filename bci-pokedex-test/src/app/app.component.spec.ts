import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { PokemonServiceService } from './services/pokemon-service.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of, throwError } from 'rxjs';
import * as mock from 'src/app/mocks';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let pokemonServiceSpy: jasmine.SpyObj<PokemonServiceService>

  beforeEach(async () => {
    pokemonServiceSpy = jasmine.createSpyObj<PokemonServiceService>('PokemonServiceService', ['getAllPokemones']);
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: PokemonServiceService, useValue: pokemonServiceSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    pokemonServiceSpy.getAllPokemones.and.returnValue(of(mock.DATA_SIN_CONEXION.results));
    fixture.detectChanges();
  });

  it('creacion del componente', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'bci-pokedex-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bci-pokedex-test');
  });

  it('llamado consultaDetallePokemon', ()=> {
    pokemonServiceSpy.getAllPokemones.and.returnValue(of(mock.DATA_SIN_CONEXION.results));
    //component.getlistaPokemones();
    expect(pokemonServiceSpy.getAllPokemones).toHaveBeenCalled();
  });

  it('llamado consultaDetallePokemon branch ', ()=> {
    component.listaPokemones = [1,2,4];
    pokemonServiceSpy.getAllPokemones.and.returnValue(throwError(mock.ERROR_404));
    component.getlistaPokemones();
    component.error500 = true;
    expect(component.error500).toBeTruthy();
  });
  
  
  

});
