import { Component, OnInit } from "@angular/core";

import { AnimationOptions } from "ngx-lottie";

@Component({
    selector: "filme-nao-encontrado",
    templateUrl: "./filme-nao-encontrado.component.html",
    styleUrls: ["./filme-nao-encontrado.component.scss"],
})
export class FilmeNaoEncontradoComponent implements OnInit {
    private lottieConfig;
    public options: AnimationOptions;
    public styles;

    constructor() {
        this.lottieConfig = {
            path: "assets/animations/not-found.json",
            renderer: "canvas",
            autoplay: true,
            loop: true,
        };

        this.options = {
            path: "/assets/animations/not-found.json",
        };
    }

    ngOnInit() {}
}
