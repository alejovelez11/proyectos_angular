import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas:any
  peliculasChilds:any
  cartelera:any
  constructor(private peliculaservice:PeliculasService, private router:Router) { }

  ngOnInit() {
    this.peliculaservice.getPopulares().subscribe(data => {
      this.peliculas =  data
    });
    this.peliculaservice.getPopularesChilds().subscribe(data => {
      this.peliculasChilds = data
    })
    this.peliculaservice.getCartelera().subscribe(data => {
      this.cartelera = data
    })
  }
  verDetalle(id:any){
    this.router.navigate(['/pelicula', id]) 
  }

}
