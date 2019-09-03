import { Component, OnInit } from "@angular/core";
import { HomeService } from "./home.service";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    form: FormGroup;
    filmes: [];
    todosFilmes;
    cursos = [];

    constructor(
        private route: ActivatedRoute,
        private homeService: HomeService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe((queryParams: any) => {
            this.filmes = queryParams["searchResults"]; 
            console.log(this.filmes);
        });
}

filmeDetalhes( id: string) {
    console.log(id);
    this.router.navigate(['/filme-detalhes'], { queryParams: { 'id': id}});
}
}
