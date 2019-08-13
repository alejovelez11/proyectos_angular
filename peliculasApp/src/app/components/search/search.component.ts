import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  buscar:string = ""
  constructor(public peliculaservice:PeliculasService, public activated:ActivatedRoute) {
    this.activated.params.subscribe(params => {
      if (params["texto"]) {
        this.buscar = params["texto"]
        this.buscarPelicula()
      }
    })
  }

  ngOnInit() {
  }
  buscarPelicula(){
    if (this.buscar.length == 0) {
      return
    }
    this.peliculaservice.buscarPelicula(this.buscar).subscribe()
  }

}
