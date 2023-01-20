import { DetallePokemonComponent } from './components/detalle-pokemon/detalle-pokemon.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/home' },
  {path:'home', component: HomeComponent },
  {path:'home/detalle-pokemon/:pokemonId', component: DetallePokemonComponent },
  {path:'**',  redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
