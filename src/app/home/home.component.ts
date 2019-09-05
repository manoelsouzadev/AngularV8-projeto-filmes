import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HomeService } from './home.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    protected filmes: [];
  
    constructor(
        private homeService: HomeService,
        private router: Router,
    ) {}
    
    ngOnInit() {
       this.getFilmes();
    }

    getFilmes() {
        this.homeService.buscarFilme('avengers').then(res => {
           // console.log(res);
            this.filmes = res.Search;
        });
    }

    filmeDetalhes(id: string) {
        // console.log(id);
         this.router.navigate(['/filme-detalhes'], { queryParams: { 'id' : id }});
     }
}
