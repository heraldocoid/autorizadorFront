import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EstadoRequest } from '../utils/request/estado-request';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http:HttpClient) { }

  consultarEstados():Promise<Response>{
    return this.http.get<Response>(environment.urlEstadoLista).toPromise();
  }

  crearEstado(request:EstadoRequest):Promise<Response>{
    return this.http.post<Response>(environment.urlEstadoCrear,request).toPromise();
  }

  editarEstado(request:EstadoRequest):Promise<Response>{
    return this.http.put<Response>(environment.urlEstadoEditar,request).toPromise();
  }
}
