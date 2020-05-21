import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { SharedService } from "../../shared/services/shared.service";
import { AnimationOptions } from 'ngx-lottie';

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    public filmes: [];
    public options: AnimationOptions;
    public styles;

    constructor(private router: Router, private sharedService: SharedService) {
        this.options = {
            path: "/assets/animations/stars.json",
        };
    }

    ngOnInit() {
        this.getFilmes();
    }

    getFilmes(): void {
        this.sharedService.buscarFilme("war").then(res => {
            this.filmes = res.Search;
        });
    }

    filmeDetalhes(id: string): void {
        this.router.navigate(["/filme-detalhes"], { queryParams: { id: id } });
    }

    scroll(el: HTMLElement): void {
        el.scrollIntoView();
    }
}
