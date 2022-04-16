import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoTarjetaService } from 'src/app/servicio/tipo-tarjeta.service';
import { TipoTarjeta } from 'src/app/utils/model/tipo-tarjeta';
import { TipoTarjetaRequest } from 'src/app/utils/request/tipo-tarjeta-request';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  formTipoTarjeta: FormGroup;
  //tipoTarjeta:TipoTarjeta;

  constructor(private srvTipoTarjeta: TipoTarjetaService) { 
    this.formTipoTarjeta = new FormGroup({
      'tipoTarjeta' : new FormControl(null, Validators.compose([Validators.required])),
    });
   }

  ngOnInit(): void {
    let request:TipoTarjetaRequest = new TipoTarjetaRequest();
    request.tipoTarjeta = this.formTipoTarjeta.value.tipoTarjeta;
    this.srvTipoTarjeta.editarTiposTarjetas(request).then((res:Response) =>{
      
    })
  }

}
