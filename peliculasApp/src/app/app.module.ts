import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {JsonpModule, HttpModule} from '@angular/http';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SearchComponent } from './components/search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { PeliculasImagenPipe } from './pipes/peliculas-imagen.pipe';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeliculasComponent,
    PeliculaComponent,
    SearchComponent,
    PeliculasImagenPipe,
    GaleriaComponent,
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
