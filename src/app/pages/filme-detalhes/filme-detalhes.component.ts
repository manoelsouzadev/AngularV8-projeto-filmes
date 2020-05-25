import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { FilmeDetalhesService } from "./filme-detalhes.service";

@Component({
    selector: "filme-detalhes",
    templateUrl: "./filme-detalhes.component.html",
    styleUrls: ["./filme-detalhes.component.scss"],
})
export class FilmeDetalhesComponent implements OnInit {
    private id: string;
    public detalhesFilme: any[];
    public actors: any[];
    public writers: any[];

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

    getFilmes(): void {
        this.filmeDetalhesService.buscarFilme(this.id).then((res) => {
            this.getStringValues([res]);
            this.detalhesFilme = Array.of(res);
        });
       
    }

    getStringValues(detalhes){
        detalhes.filter(elem => {
            if(elem.Actors !== 'N/A')
                this.actors = elem.Actors.split(',');
                console.log(this.actors);
            if(elem.Writer !== 'N/A' )
                this.writers = elem.Writer.split(',');
                console.log(this.writers);
        })
    }
}
