import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/servicio/estado.service';
import { Estado } from 'src/app/utils/model/estado';
import { Response } from 'src/app/utils/response/response';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})
export class ListarEstadoComponent implements OnInit {

  listaEstados:Estado[] = [];

  constructor(private srvEstado: EstadoService) { }

  ngOnInit(): void {
    this.srvEstado.consultarEstados().then((res:Response)=>{
      this.listaEstados = res.value;
    })
  }

}
