import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const { urls } = environment;
@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllPokemones(): Observable <any>{
    return this.httpClient.get<any>(urls.getAllPokemones);
  }

  getDetallePokemon():  Observable <any>{
    return this.httpClient.get<any>(urls.getAllPokemones);
  }
}
