import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FilmeDetalhesComponent } from './filme-detalhes/filme-detalhes.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { QuemSouComponent } from './quem-sou/quem-sou.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lista-filmes', component: ListaFilmesComponent },
    { path: 'filme-detalhes', component: FilmeDetalhesComponent },
    { path: 'quem-sou', component: QuemSouComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
