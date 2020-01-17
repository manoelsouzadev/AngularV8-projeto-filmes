import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay } from "rxjs/operators";
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

    // buscarFilme2(name: string, pageNumber?) {
    //     return this.http.get(`${this.API}&s=${name}`).pipe(
    //         delay(2000),
    //         map((value: any) => {
    //             if (
    //                 value.Search === '' ||
    //                 value.Search === undefined ||
    //                 value.Search === null
    //             ) {
    //                 this.router.navigate(["/nao-encontrado"]);
    //                 setTimeout(() => {
    //                     this.router.navigate(["/"]);
    //                 }, 5000);
    //             }
    //             if (pageNumber != null) {
    //                 return this.http
    //                     .get(`${this.API}&s=${name}&page=${pageNumber}`);
    //             } else {
    //                 return this.http.get(`${this.API}&s=${name}`);
    //             }
    //         })
    //     );
    // }

    buscarFilmeOther(name: string, pageNumber?): any {
        if (pageNumber != null) {
            return this.http.get(`${this.API}&s=${name}&page=${pageNumber}`);
        } else {
            return this.http.get(`${this.API}&s=${name}`);
        }
    }
}
