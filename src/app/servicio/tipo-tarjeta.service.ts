import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipoTarjetaRequest } from '../utils/request/tipo-tarjeta-request';

@Injectable({
  providedIn: 'root'
})
export class TipoTarjetaService {

  constructor(private http: HttpClient) { }

  consultaIdTipoTarjeta(){
    
  }

  consultarTiposTarjetas():Promise<Response>{
    return this.http.get<Response>(environment.urlTipoTarjetaLista).toPromise();
  }

  crearTiposTarjetas(request:TipoTarjetaRequest):Promise<Response>{
    return this.http.post<Response>(environment.urlTarjetaCrear,request).toPromise();
  }

  editarTiposTarjetas(request:TipoTarjetaRequest):Promise<Response>{
    return this.http.post<Response>(environment.urlTipoTarjetaEditar,request).toPromise();
  }
}
