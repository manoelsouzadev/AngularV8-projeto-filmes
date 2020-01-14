import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilmeDetalhesComponent } from './filme-detalhes/filme-detalhes.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { QuemSouComponent } from './quem-sou/quem-sou.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FilmeNaoEncontradoComponent } from './filme-nao-encontrado/filme-nao-encontrado.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FilmeDetalhesComponent,
        ListaFilmesComponent,
        NavbarComponent,
        QuemSouComponent,
        FooterComponent,
        FilmeNaoEncontradoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
        NgxStarRatingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
