import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay, map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class SharedService {
    private readonly API = environment.API;

    constructor(private http: HttpClient, private router: Router) {}

    buscarFilme(name: string): Promise<any> {
        return this.http
            .get(`${this.API}&s=${name}`)
            .pipe(delay(2000))
            .toPromise();
    }

    buscarFilme2(name: string) {
        return this.http.get(`${this.API}&s=${name}`).pipe(
            delay(2000),
            map((value: any) => {
                if (
                    value.Search === '' ||
                    value.Search === undefined ||
                    value.Search === null
                ) {
                    this.router.navigate(["/nao-encontrado"]);
                    setTimeout(() => {
                        this.router.navigate(["/"]);
                    }, 5000);
                }else{
                    return value.Search;
                }
            })
        );
    }
}
