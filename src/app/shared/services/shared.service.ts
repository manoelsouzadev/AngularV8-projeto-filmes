import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

    apikey: string;
    url: string;

    constructor(private http: HttpClient) {
        this.apikey = 'c901dbca';
        this.url = 'http://www.omdbapi.com/?apikey=';
    }


  buscarFilme(name: string): Promise<any> {
    return this.http.get(`${this.url}${this.apikey}&s=${name}`).pipe(delay(2000)).toPromise();
}
}
