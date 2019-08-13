import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'peliculas', component: PeliculasComponent},
  {path:'pelicula/:id/:pag', component: PeliculaComponent},
  {path:'search', component: SearchComponent},
  {path:'search/:texto', component: SearchComponent},
  {path:'**', pathMatch:'full', redirectTo:'peliculas'}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
