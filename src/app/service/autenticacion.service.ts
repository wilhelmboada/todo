import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(
    private http: HttpClient
  ) { }

  login(usuario: string, password: string) {
    return this.http.post(`http://192.168.1.56:8090/app/login`, { usuario, password }, { responseType: 'text' });
  }

  guardarUsuario(nombre: string, apellido: string, usuario: string, password: string) {
    return this.http.post(`http://192.168.1.56:8090/app/guardar`, { nombre, usuario, apellido, password }, { responseType: 'text' });
  }

}
