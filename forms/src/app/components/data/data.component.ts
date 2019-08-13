import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {
  forma:FormGroup
  constructor() { 
    this.forma = new FormGroup({
      "nombre": new FormControl("", Validators.required),
      "apellido": new FormControl("", Validators.required),
      "correo": new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }
  guardarCambios(){
   console.log(
    this.forma.value);
  }

}
