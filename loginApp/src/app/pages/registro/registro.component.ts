import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { error } from 'util';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel

  constructor(private auth:AuthService, private router:Router) {
  
  }

  ngOnInit() { 
    this.usuario = new UsuarioModel()
    this.usuario.email = "alejovg0911@gmail.com"    
  }
  onSubmit(form){
    if (form.invalid) {
      return
    }
    Swal.fire({
      allowOutsideClick:false,
      type:"info",
      text:"Espere por favor"
    })
    Swal.showLoading()
    this.auth.nuevoUsuario(this.usuario).subscribe(r=>{
      Swal.close()
      this.router.navigateByUrl("/home")
    }, (err)=>{
      Swal.fire({
        type:"error",
        title: "Error al registrarse",
        text:err.error.error.message
      })
      
    })
  }


}
