import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { FilmeDetalhesComponent } from "./pages/filme-detalhes/filme-detalhes.component";
import { ListaFilmesComponent } from "./pages/lista-filmes/lista-filmes.component";
import { SobreComponent } from "./pages/sobre/sobre.component";
import { FilmeNaoEncontradoComponent } from "./pages/filme-nao-encontrado/filme-nao-encontrado.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "lista-filmes", component: ListaFilmesComponent },
    { path: "filme-detalhes", component: FilmeDetalhesComponent },
    { path: "sobre", component: SobreComponent },
    { path: "nao-encontrado", component: FilmeNaoEncontradoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
