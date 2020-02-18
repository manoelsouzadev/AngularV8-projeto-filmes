import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

import { FilmeDetalhesComponent } from "./pages/filme-detalhes/filme-detalhes.component";
import { ListaFilmesComponent } from "./pages/lista-filmes/lista-filmes.component";
import { SharedModule } from "./shared/shared.module";
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { NgxStarRatingModule } from "ngx-star-rating";
import { SobreComponent } from "./pages/sobre/sobre.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { FilmeNaoEncontradoComponent } from "./pages/filme-nao-encontrado/filme-nao-encontrado.component";
import { BottomMenuComponent } from "./pages/bottom-menu/bottom-menu.component";
import { NgxPageScrollModule } from "ngx-page-scroll";
import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FilmeDetalhesComponent,
        ListaFilmesComponent,
        NavbarComponent,
        SobreComponent,
        FooterComponent,
        FilmeNaoEncontradoComponent,
        BottomMenuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
        NgxStarRatingModule,
        NgxPageScrollModule,
        NgxPageScrollCoreModule,
        ServiceWorkerModule.register("ngsw-worker.js", {
            enabled: environment.production
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
