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
        this.form = this.formBuilder.group({
            nome: [null, [Validators.required, Validators.minLength(4)]]
        });
    }

    getFilmes(event) {
        //const FILME = event.target.value;
        this.homeService.buscarFilme(this.form.get("nome").value).then(res => {
            this.filmes = res.Search;
        });
    }

    filmeDetalhes(id: string) {
        console.log(id);
        this.router.navigate(["/filme-detalhes"], { queryParams: { 'id': id } });
    }
}
