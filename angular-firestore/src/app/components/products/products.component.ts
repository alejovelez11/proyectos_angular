import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = []
  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.productservice.getProducts().subscribe(p=>{
      this.products = p
      
      console.log(this.products);
    })
    
  }
  deleteProduct(){

  }

}
