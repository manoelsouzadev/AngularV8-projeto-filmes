import { Component, OnInit } from "@angular/core";

@Component({
    selector: "bottom-menu",
    templateUrl: "./bottom-menu.component.html",
    styleUrls: ["./bottom-menu.component.scss"]
})
export class BottomMenuComponent implements OnInit {
    private home;
    constructor() {}

    ngOnInit() {
        this.home = document.getElementById("home");
        let linkHome = (document.getElementById("linkHome").style.borderBottom =
            "3px solid #fff");
    }

    // mostrarAtivo(tag){
    //     //var tag_li = document.getElementById('lista_menu');
    //     var tag_a = document.getElementsByTagName('a');
    //     for (let i=0; i<tag_a.length; i++ )
    //     {
    //        tag_a[i].style.color = "";
    //     }
    //        tag.style.color = "#ff0000";
    //     }

    mostrarAtivo(tag): void {
        //var tag_li = document.getElementById('lista_menu');
        var tag_a = document.getElementsByTagName("a");
        for (let i = 0; i < tag_a.length; i++) {
            tag_a[i].style.borderBottomColor = "#201f1f";
        }
        tag.style.borderBottomColor = "#fff";
    }
}
