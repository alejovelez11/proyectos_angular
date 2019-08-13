import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  pelicula:any
  regresarA:string
  constructor(private activatedRoute:ActivatedRoute, private peliculaservice:PeliculasService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p =>{
      this.regresarA = p["pag"]
      this.peliculaservice.getDetalle(p["id"]).subscribe(pel => {
        this.pelicula = pel 
      })
    })
  }
}
