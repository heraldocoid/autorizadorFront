import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEstadoComponent } from './component/estado/crear-estado/crear-estado.component';
import { EditarEstadoComponent } from './component/estado/editar-estado/editar-estado.component';
import { ListarEstadoComponent } from './component/estado/listar-estado/listar-estado.component';
import { CrearComponent } from './tipo-tarjeta/crear/crear.component';
import { EditarComponent } from './tipo-tarjeta/editar/editar.component';
import { ListarComponent } from './tipo-tarjeta/listar/listar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'tipo-tarjeta', component:ListarComponent },
  { path: 'crear-tipo-tarjeta', component:CrearComponent },
  { path: 'editar-tipo-tarjeta', component:EditarComponent },
  { path: 'estado', component:ListarEstadoComponent },
  { path: 'crear-estado', component:CrearEstadoComponent },
  { path: 'editar-estado', component:EditarEstadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
