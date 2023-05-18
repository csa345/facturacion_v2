import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegistroComponent} from './principal/registro/registro.component';

const routes: Routes = [
{ path: '**', title: 'Registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
