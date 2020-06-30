import { Component, OnInit } from "@angular/core";
import { timer } from 'rxjs';

import { AnimationOptions } from "ngx-lottie";

@Component({
    selector: "sobre",
    templateUrl: "./sobre.component.html",
    styleUrls: ["./sobre.component.scss"]
})
export class SobreComponent implements OnInit {
    public options: AnimationOptions;
    public showAnimation: boolean = false;
    
    constructor() {}

    ngOnInit() {
        this.options = {
            path: "/assets/animations/boy-laptop.json",
        };

        timer(1500).subscribe(res => this.showAnimation = true);
    }

    scroll(el: HTMLElement): void {
        el.scrollIntoView();
    }
}
