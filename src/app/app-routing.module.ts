import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FilmeDetalhesComponent } from './filme-detalhes/filme-detalhes.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'filme-detalhes', component: FilmeDetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
