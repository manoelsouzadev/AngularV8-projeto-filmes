import { Component, OnInit } from "@angular/core";
import { HomeService } from "./home.service";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    protected filmes: [];
    private search: string;

    constructor(
        private route: ActivatedRoute,
        private homeService: HomeService,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe((queryParams: any) => {
            this.search = queryParams["search"];
            //console.log("detalhe: " + this.search);
            if (this.search != null || this.search != undefined) {
                this.getFilmes();
            }
        });
    }

    getFilmes() {
        this.homeService.buscarFilme(this.search).then(res => {
           // console.log(res);
            this.filmes = res.Search;
        });
    }

    filmeDetalhes(id: string) {
       // console.log(id);
        this.router.navigate(["/filme-detalhes"], { queryParams: { id: id }});
    }
}
