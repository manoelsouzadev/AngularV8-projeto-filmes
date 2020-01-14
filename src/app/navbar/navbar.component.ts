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
    private homeLink;
    private quemSouLink;

    constructor(private formBuilder: FormBuilder, private router: Router) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            nome: [null, [Validators.required, Validators.minLength(2)]]
        });

        // this.homeLink = document.getElementById('home');
        this.quemSouLink = document.getElementById('quem_sou');
    }

    getFilmes() {
        if (this.form.valid) {
            this.router.navigate(["lista-filmes"], {
                queryParams: { search: this.form.get("nome").value }
            });
        } else {
            return;
        }
    }

    // setStyle(link: string){
    //     if(link === 'home'){
    //         this.homeLink.style.color = 'white';
    //     }
    //     if(link === 'quem_sou'){
    //         this.quemSouLink.style.color = 'blue';
    //     }

    // }
}
