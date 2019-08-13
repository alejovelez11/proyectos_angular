import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicas';
  empleados:any[] = [
    {id:1, nombre:"Alejandro", pais:"Colombia"},
    {id:2, nombre:"Isabel", pais:"Colombia"},
    {id:3, nombre:"Juan", pais:"Colombia"},
  ]

  seletedEmpleado:any = {
    id:0,
    nombre:"",
    pais:""
  }

  addOrEdit(){
    if (this.seletedEmpleado.id === 0) {
      this.seletedEmpleado.id = this.empleados.length + 1
      this.empleados.push(this.seletedEmpleado)
    }
    this.seletedEmpleado = {}
  }
  
  openEdit(empleado){
    this.seletedEmpleado = empleado
  }
  delete(){
    this.empleados = this.empleados.filter(e => e !== this.seletedEmpleado)
  }
}
