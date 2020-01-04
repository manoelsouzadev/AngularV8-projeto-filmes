import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FilmeDetalhesService {
    private readonly API = environment.API;

    constructor(private http: HttpClient) {}

    buscarFilme(id: string): Promise<any> {
        return this.http
            .get(`${this.API}&i=${id}`)
            .pipe(delay(2000))
            .toPromise();
    }
}
