import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HomeService } from "../home/home.service";
import { FilmeDetalhesService } from './filme-detalhes.service';

@Component({
    selector: "app-filme-detalhes",
    templateUrl: "./filme-detalhes.component.html",
    styleUrls: ["./filme-detalhes.component.scss"]
})
export class FilmeDetalhesComponent implements OnInit {
   private id: string;
   protected detalhesFilme: any[] = [];

    constructor(
        private route: ActivatedRoute,
        private filmeDetalhesService: FilmeDetalhesService
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe((queryParams: any) => {
            this.id = queryParams["id"];

            console.log("detalhe: " + this.id);
        });
       // this.filmeDetalhesService.buscarFilme(this.id).then(res => {
         ///   this.detalheFilme = res;
          //  console.log('detalheFilme :');
          //  console.log(res.Search);
      //  });

        this.filmeDetalhesService.buscarFilme(this.id).then(res => {
            this.detalhesFilme = Array.of(res);
            console.log('detalheFilme :');
            console.log(this.detalhesFilme); 
        });
    }
}
