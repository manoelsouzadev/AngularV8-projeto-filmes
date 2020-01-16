import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SharedService } from '../shared/services/shared.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public filmes: [];

    constructor(private router: Router, private sharedService: SharedService) {}

    ngOnInit() {
        this.getFilmes();
    }

    getFilmes() {
        this.sharedService.buscarFilme('war').then(res => {
            // console.log(res);
            this.filmes = res.Search;
        });
    }

    filmeDetalhes(id: string) {
        // console.log(id);
        this.router.navigate(['/filme-detalhes'], { queryParams: { id: id } });
    }
}
