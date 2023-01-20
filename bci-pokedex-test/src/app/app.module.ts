import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetallePokemonComponent } from './components/detalle-pokemon/detalle-pokemon.component';
import { FormsModule } from '@angular/forms';
import { FiltroBusquedaPipe } from './pipes/filtro-busqueda.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetallePokemonComponent,
    FiltroBusquedaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
