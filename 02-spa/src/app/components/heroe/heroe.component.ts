import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
heroe:any={}
  constructor(private activatedRoute:ActivatedRoute, private _heroesServices:HeroesService) { 
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p =>{
      this.heroe = this._heroesServices.getHeroe(p["id"])
      console.log(this.heroe);
      
    })
  }

}
