import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

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
    this.pokemonServiceService.getDetallePokemon(this.pokemonId).
      subscribe(detalle =>{
        this.detallePokemon = detalle;
        console.log(this.detallePokemon.moves);
      });
  }

  consultaImagenPokemon(): string {
    let url ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    url+=this.pokemonIdImagen;
    return url;
  }

  consultaUbicacion():void {
    let idLocalizacion = this.pokemonId+'1/encounters';
    this.pokemonServiceService.getLocalizacionPokemon(idLocalizacion).
      subscribe(localizacion =>{
        this.localizacionPokemon = localizacion;
        console.log(this.localizacionPokemon);
        
      })
  }

}
