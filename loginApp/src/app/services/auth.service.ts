import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
  private apikey = 'AIzaSyCys-exJjKZA7XQTM0yhqQ2bp95KbiL_lc'
  userToken:string
  // Crear nuevos usuarios
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]
// Login
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]
  constructor(private http: HttpClient) { }

  logout(){

  }
  login(usuario:UsuarioModel){
    const authData = {
      email : usuario.email,
      password: usuario.password,
      returnSecureToken:true
    }
    return this.http.post(
      `${this.url}/verifyPassword?key=${this.apikey}`,
      authData
    ).pipe(
      map(res=>{
        this.guardarToken(res["idToken"])
        return res

      })
    )
  }
  nuevoUsuario(usuario:UsuarioModel){
    const authData = {
      email : usuario.email,
      password: usuario.password,
      returnSecureToken:true
    }
    return this.http.post(
      `${this.url}/signupNewUser?key=${this.apikey}`,
      authData
    ).pipe(
      map(res=>{
        this.guardarToken(res["idToken"])
        return res
      })
    )
  }
  private guardarToken(idToken:string){
    this.userToken = idToken
    localStorage.setItem("token",idToken)

  }
  leerToken(){
    if (localStorage.getItem("token")) {
      this.userToken = localStorage.getItem("token")
    }else{
      this.userToken = ''
    }
    return this.userToken
  }
  estaAutenticado():boolean {
    return this.userToken.length > 2
  }
}
