import { Component, OnInit } from "@angular/core";

import { AnimationOptions } from "ngx-lottie";

@Component({
    selector: "sobre",
    templateUrl: "./sobre.component.html",
    styleUrls: ["./sobre.component.scss"]
})
export class SobreComponent implements OnInit {
    public options: AnimationOptions;

    constructor() {}

    ngOnInit() {
        this.options = {
            path: "/assets/animations/boy-laptop.json",
        };
    }

    scroll(el: HTMLElement): void {
        el.scrollIntoView();
    }
}
