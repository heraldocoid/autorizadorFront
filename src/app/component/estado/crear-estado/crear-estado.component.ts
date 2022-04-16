import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstadoService } from 'src/app/servicio/estado.service';

@Component({
  selector: 'app-crear-estado',
  templateUrl: './crear-estado.component.html',
  styleUrls: ['./crear-estado.component.css']
})
export class CrearEstadoComponent implements OnInit {

  formEstado: FormGroup;

  constructor(private srvEstado: EstadoService) { 
    this.formEstado = new FormGroup({
      'estado' : new FormControl(null,Validators.compose([Validators.required]))
    });
   }

  ngOnInit(): void {
  }

}
