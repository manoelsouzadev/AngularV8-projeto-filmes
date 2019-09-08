import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FilmeDetalhesService } from './filme-detalhes.service';

@Component({
    selector: 'app-filme-detalhes',
    templateUrl: './filme-detalhes.component.html',
    styleUrls: ['./filme-detalhes.component.scss']
})
export class FilmeDetalhesComponent implements OnInit {
    private id: string;
    protected detalhesFilme: any[];

    constructor(
        private route: ActivatedRoute,
        private filmeDetalhesService: FilmeDetalhesService
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe((queryParams: any) => {
            this.id = queryParams['id'];
        });

        if (this.id != null || this.id != undefined) {
            this.getFilmes();
            console.log(this.id);
        }
    }

    getFilmes() {
        this.filmeDetalhesService.buscarFilme(this.id).then(res => {
            this.detalhesFilme = Array.of(res);
            console.log(this.detalhesFilme);
        });
    }
}
