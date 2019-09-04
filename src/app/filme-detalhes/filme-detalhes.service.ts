import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FilmeDetalhesService {
    apikey: string;
    url: string;

    constructor(private http: HttpClient) {
        this.apikey = 'c901dbca';
        this.url = 'http://www.omdbapi.com/?apikey=';
    }

    buscarFilme(id: string): Promise<any> {
        return this.http.get(`${this.url}${this.apikey}&i=${id}`).toPromise();
    }
}
