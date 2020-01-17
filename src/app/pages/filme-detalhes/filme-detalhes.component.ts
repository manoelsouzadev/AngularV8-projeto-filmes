import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { FilmeDetalhesService } from "./filme-detalhes.service";

@Component({
    selector: "filme-detalhes",
    templateUrl: "./filme-detalhes.component.html",
    styleUrls: ["./filme-detalhes.component.scss"]
})
export class FilmeDetalhesComponent implements OnInit {
    private id: string;
    public detalhesFilme: any[];

    constructor(
        private route: ActivatedRoute,
        private filmeDetalhesService: FilmeDetalhesService
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe((queryParams: any) => {
            this.id = queryParams["id"];
        });

        if (this.id != null || this.id != undefined) {
            this.getFilmes();
        }
    }

    getFilmes() {
        this.filmeDetalhesService.buscarFilme(this.id).then(res => {
            this.detalhesFilme = Array.of(res);
        });
    }
}
