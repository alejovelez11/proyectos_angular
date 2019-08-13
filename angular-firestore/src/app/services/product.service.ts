import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from "../models/product";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'  
})
export class ProductService {
  productsCollection:AngularFirestoreCollection
  productsDoc
  products:Observable<Product[]>
  constructor(private db: AngularFirestore) {
    // this.products = this.db.collection("products").valueChanges()

    // aca obtengo el los registros junto con el id 
    this.productsCollection = this.db.collection("products")
    this.products = this.productsCollection.snapshotChanges().pipe(map(data =>{
      return data.map(a=>{
        const data = a.payload.doc.data() as Product
        data.id = a.payload.doc.id
        return data
      })
    }))
  
  }
  getProducts(){
    return this.products
  }
  deleteProduct(product:Product){
  
  }
}
