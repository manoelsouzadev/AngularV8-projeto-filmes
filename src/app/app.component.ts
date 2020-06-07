import { Component, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { timer } from 'rxjs';

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    protected form: FormGroup;
    public showPage = false;
    constructor(private formBuilder: FormBuilder, private router: Router) {}

    ngOnInit() {
        timer(1000).subscribe(res => this.showPage = true);
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
