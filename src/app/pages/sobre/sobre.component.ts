import { Component, OnInit } from "@angular/core";

@Component({
    selector: "sobre",
    templateUrl: "./sobre.component.html",
    styleUrls: ["./sobre.component.scss"]
})
export class SobreComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    scroll(el: HTMLElement) {
        el.scrollIntoView();
    }
}
