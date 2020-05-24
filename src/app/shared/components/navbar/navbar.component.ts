import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
    public form: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router) {}

    ngOnInit() {
        let linkHome = (document.getElementById("linkHomeMenu").style.color =
            "#fff");

        this.form = this.formBuilder.group({
            nome: [null, [Validators.required, Validators.minLength(2)]],
        });
    }

    getFilmes(): any {
        if (this.form.valid) {
            this.router.navigate(["lista-filmes"], {
                queryParams: { search: this.form.get("nome").value },
            });
        } else {
            return;
        }
    }

    mostrarAtivo(tag): void {
        let tag_a = document.getElementsByClassName("nav-link");
        let newColor = "#646363";
        document.getElementById("logo").style.color = "#fff";
        for (let i = 0; i < tag_a.length; i++) {
            document.getElementById("linkHomeMenu").style.color = newColor;
            document.getElementById("linkSobre").style.color = newColor;
            document.getElementById("linkApi").style.color = newColor;
        }
        tag.style.color = "#fff";
    }
}
