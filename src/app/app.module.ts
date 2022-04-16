import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './tipo-tarjeta/listar/listar.component';
import { CrearComponent } from './tipo-tarjeta/crear/crear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './tipo-tarjeta/editar/editar.component';
import { ListarEstadoComponent } from './component/estado/listar-estado/listar-estado.component';
import { CrearEstadoComponent } from './component/estado/crear-estado/crear-estado.component';
import { EditarEstadoComponent } from './component/estado/editar-estado/editar-estado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CrearComponent,
    EditarComponent,
    ListarEstadoComponent,
    CrearEstadoComponent,
    EditarEstadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
