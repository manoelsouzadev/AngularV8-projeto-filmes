import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private readonly API = environment.API;

    constructor(private http: HttpClient) {}

    buscarFilme(name: string): Promise<any> {
        return this.http
            .get(`${this.API}&s=${name}`)
            .pipe(delay(2000))
            .toPromise();
    }

    buscarFilme2(name: string){
        return this.http
            .get(`${this.API}&s=${name}`)
            .pipe(delay(2000), map((value : any) => value.Search));
    }
}
