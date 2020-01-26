import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
    public form: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            nome: [null, [Validators.required, Validators.minLength(2)]]
        });
    }

    getFilmes(): any {
        if (this.form.valid) {
            this.router.navigate(["lista-filmes"], {
                queryParams: { search: this.form.get("nome").value }
            });
        } else {
            return;
        }
    }
}