import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:HeroeModel[] = []
  cargando = false
  constructor(private heroeservice:HeroesService) { }

  ngOnInit() {
    this.cargando = true
    this.heroeservice.getHeroes().subscribe(r=>{
      this.heroes = r
      this.cargando = false
    })
  }
  borrarHeroe(heroe:HeroeModel, i:number){
    Swal.fire({
      title:'Esta seguro?',
      text: `Esta seguro que desea borrar a ${heroe.nombre} ?`,
      type: 'question',
      showConfirmButton:true,
      showCancelButton:true

    }).then(r=>{
      // si la respuesta de la alerta es true borremelo
      if (r.value) {
        this.heroes.splice(i, 1)
        this.heroeservice.borrarHeroe(heroe.id).subscribe(r=>{
        })
      }
    })
  }

}
