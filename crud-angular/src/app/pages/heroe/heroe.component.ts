import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from "sweetalert2";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe = new HeroeModel()
  constructor(private heroeservice:HeroesService, private route:ActivatedRoute) { }

  ngOnInit() {
      // para capturar el parametro de la ruta
      const id = this.route.snapshot.paramMap.get("id")
      if (id !== "nuevo") {
          this.heroeservice.getHeroe(id).subscribe((r:any)=>{
            this.heroe = r
            this.heroe.id = id
          })
      }
  }
  
  guardar(form:NgForm){
    Swal.fire({
      title:'Espere',
      text:'Guardando informacion',
      type: 'info',
      allowOutsideClick:false
    })
    Swal.showLoading()

    let peticion: Observable<any>

    if (this.heroe.id) {
      peticion = this.heroeservice.actualizarHeroe(this.heroe) 
    }else{
      peticion = this.heroeservice.crearHeroe(this.heroe)
    }
    peticion.subscribe(r=>{
      Swal.fire({
        title:this.heroe.nombre,
        text:'Se actualizo',
        type:'success'
      })
    })
  }

}
