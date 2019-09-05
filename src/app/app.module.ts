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

@NgModule({
    declarations: [AppComponent, HomeComponent, FilmeDetalhesComponent, ListaFilmesComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
