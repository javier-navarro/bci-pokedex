import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import * as globals from 'src/app/global';
@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.css']
})
export class DetallePokemonComponent implements OnInit {

  pokemonId: number = 0;
  pokemonIdImagen: string = '';
  detallePokemon: any;
  imagenPokemon: any;
  localizacionPokemon: any;
  mensajesErrores = globals.mensajesEror;
  errorLocalicacionPokemon: string = '';
  errorDetallePokemon: string = '';
  vaciaLocalicacionPokemon: string = this.mensajesErrores.CONSULTA_UBICACION_VACIA;
  spinnerConsultaDetalle: any;
  constructor(private activatedRoute: ActivatedRoute,
              private pokemonServiceService:PokemonServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.pokemonId = params["pokemonId"];
      this.pokemonIdImagen = this.pokemonId+'.png';
    });
    this.consultaDetallePokemon();
    this.consultaImagenPokemon();
    this.consultaUbicacion();
  }

  consultaDetallePokemon(): any {
    this.spinnerConsultaDetalle = true;
    setTimeout(() => {
      this.pokemonServiceService.getDetallePokemon(this.pokemonId).
      subscribe(detalle =>{        
        this.spinnerConsultaDetalle = false;
        this.detallePokemon = detalle;
      }, () => {
        this.spinnerConsultaDetalle = false;
        this.errorDetallePokemon = this.mensajesErrores.ERROR_CONSULTA_DETALLE;
      });
    }, 3000);
    
  }

  consultaImagenPokemon(): string {
    let url ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    url+=this.pokemonIdImagen;
    return url;
  }

  consultaUbicacion():void {
    let idLocalizacion = this.pokemonId+'/encounters';
    this.pokemonServiceService.getLocalizacionPokemon(idLocalizacion).
      subscribe(localizacion =>{
        this.localizacionPokemon = localizacion;
        console.log(this.localizacionPokemon);
      }, () =>{
        this.errorLocalicacionPokemon = this.mensajesErrores.ERROR_CONSULTA_UBICACION;
      })
  }

}
