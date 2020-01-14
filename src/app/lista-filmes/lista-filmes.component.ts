import { OnInit, Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { SharedService } from "../shared/services/shared.service";
import { tap, map } from "rxjs/operators";

@Component({
    selector: "app-lista-filmes",
    templateUrl: "./lista-filmes.component.html",
    styleUrls: ["./lista-filmes.component.scss"]
})
export class ListaFilmesComponent implements OnInit {
    public filmes;
    private search: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private sharedService: SharedService
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe((queryParams: any) => {
            this.search = queryParams["search"];
            if (this.search != null || this.search != undefined) {
                this.getFilmes();
                console.log(this.filmes);
            }
        });
    }

    async getFilmes() {
        // this.sharedService.buscarFilme(this.search).then(res => {
        //      console.log('promise'+ res);
        //     this.filmes = res.Search;
        // });

       await this.sharedService
            .buscarFilme2(this.search)
            .pipe(tap(console.log))
            .subscribe(res => (this.filmes = res));
    }

    filmeDetalhes(id: string) {
        // console.log(id);
        this.router.navigate(["/filme-detalhes"], { queryParams: { id: id } });
    }
}
