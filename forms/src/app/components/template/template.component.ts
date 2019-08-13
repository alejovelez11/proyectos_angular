import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {
  
usuario:Object={
  nombre: "a",
  apellido:"",
  correo:""
}

  constructor() {
    
  }

  ngOnInit() {
  }
  guardar(form:NgForm){
    console.log(form.controls["apellido"].value);
  }

}
