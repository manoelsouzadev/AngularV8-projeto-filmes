import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaFilmesService } from './lista-filmes.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss']
})
export class ListaFilmesComponent implements OnInit {

    protected filmes: [];
    private search: string;

    constructor(
        private route: ActivatedRoute,
        private listaFilmesService: ListaFilmesService,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe((queryParams: any) => {
            this.search = queryParams['search'];
            if (this.search != null || this.search != undefined) {
                this.getFilmes();
                console.log(this.filmes);
            }
        });
    }

    getFilmes() {
        this.listaFilmesService.buscarFilme(this.search).then(res => {
           // console.log(res);
            this.filmes = res.Search;
        });
    }

    filmeDetalhes(id: string) {
       // console.log(id);
        this.router.navigate(['/filme-detalhes'], { queryParams: { 'id' : id }});
    }
}

