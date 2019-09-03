import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from './home/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 form: FormGroup;
filmes: [];
todosFilmes;
cursos = [];

constructor(
    private homeService: HomeService,
    private formBuilder: FormBuilder,
    private router: Router
) {}

ngOnInit() {
    this.form = this.formBuilder.group({
        nome: [null, [Validators.required, Validators.minLength(4)]]
    });
}

getFilmes(event) {
    //const FILME = event.target.value;
    this.homeService.buscarFilme(this.form.get("nome").value).then(res => {
        //this.filmes = res.Search;
         this.router.navigate(['/home'], { queryParams: { 'searchResults': res.Search}});
    });
}

filmeDetalhes( id: string) {
    console.log(id);
    this.router.navigate(['/filme-detalhes'], { queryParams: { 'id': id}});
}
}
