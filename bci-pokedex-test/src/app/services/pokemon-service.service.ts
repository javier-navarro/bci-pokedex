import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';

const { urls } = environment;
@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  dataHome: any;
  constructor(private httpClient: HttpClient) { }

  getAllPokemones(): Observable <any>{
    return this.httpClient.get<any>(urls.getAllPokemones).
      pipe(catchError(e =>{
        return throwError(e);
      }));
  }

  getDetallePokemon(idPokemon: number):  Observable <any>{
    return this.httpClient.get<any>(urls.getDetallePokemon+idPokemon);
  }

  getLocalizacionPokemon(idPokemon: string): Observable<any>{
    return this.httpClient.get<any>(urls.getLocalizacionPokemon+idPokemon);
  }

  obtenerDataHome(): any {
    return this.dataHome;
  }
}
