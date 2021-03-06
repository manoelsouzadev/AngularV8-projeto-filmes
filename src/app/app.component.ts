import { Component, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    protected form: FormGroup;
    constructor(private formBuilder: FormBuilder, private router: Router) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            nome: [null, [Validators.required, Validators.minLength(4)]],
        });
    }

    getFilmes(): void {
        this.router.navigate(["home"], {
            queryParams: { search: this.form.get("nome").value },
        });
    }
}
