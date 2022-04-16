import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  formTipoTarjeta: FormGroup;

  constructor() {
    this.formTipoTarjeta = new FormGroup({
      'tipoTarjeta' : new FormControl(null, Validators.compose([Validators.required])),
    });
   }

  ngOnInit(): void {}

  submitTarjeta(){
    
  }
}
