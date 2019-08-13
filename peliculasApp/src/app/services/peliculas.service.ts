import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiKey:string = "611db97322e3c1d6676567f509ae96e9"
  private urlMovieDB:string = "https://api.themoviedb.org/3"
  peliculasBusqueda:any[] = []

  constructor(private jsonp:Jsonp) { }
  getCartelera(){
    
    let desde = new Date()  
    let hasta = new Date()  
    hasta.setDate(hasta.getDate() + 7)
    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDay()}`
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDay()}`

    let url = `${this.urlMovieDB}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
                      .pipe(
                        map(r => r.json().results)
                      )
  }

  getPopulares(){
    let url = `${this.urlMovieDB}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
                      .pipe(
                        map(r => r.json().results)
                      )
    
  }

  getPopularesChilds(){
    let url = `${this.urlMovieDB}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
                     .pipe(
                       map(r => r.json().results)
                     ) 
  }

  getDetalle(id:number){    
    let url = `${this.urlMovieDB}/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
                     .pipe(
                       map(r => r.json())
                     ) 
  }
  
  buscarPelicula(texto:string){
    let url = `${this.urlMovieDB}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
    .pipe(
      map(r => {
        this.peliculasBusqueda = r.json().results
        // return r.json().results
      })
    ) 
  }
}
