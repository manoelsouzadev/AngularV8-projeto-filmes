import { OnInit, Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { SharedService } from "../../shared/services/shared.service";

@Component({
    selector: "lista-filmes",
    templateUrl: "./lista-filmes.component.html",
    styleUrls: ["./lista-filmes.component.scss"],
})
export class ListaFilmesComponent implements OnInit {
    public filmes: any[];
    private search: string;
    private total: number;
    private currentPage: number = 1;
    public show: boolean = true;
    public totalResults: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private sharedService: SharedService
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe((queryParams: any) => {
            this.search = queryParams["search"];
            if (this.search != null || this.search != undefined) {
                this.getFilmes();
            }
        });
    }

    getFilmes(): void {
        // this.homeService.buscarFilme(this.search).subscribe(res => {
        //     this.filmes = res;
        //     console.log(res);
        // });

        this.sharedService
            .buscarFilmeOther(this.search)
            .subscribe((res: any) => {
                this.filmes = res.Search;
                this.totalResults = res.totalResults;
                if (
                    res.Search === "" ||
                    res.Search === undefined ||
                    res.Search === null
                ) {
                    this.router.navigate(["/nao-encontrado"]);
                    setTimeout(() => {
                        this.router.navigate(["/"]);
                    }, 5000);
                }
                this.setTotal(res.totalResults);
            });
        //  console.log("total: " + this.total);
        //this.homeService.returnRes(this.search).pipe( map((value: any) => this.onConsole( value.totalResults))).subscribe(res => console.log(res))
        // this.homeService.returnRes(this.search).subscribe((res:any) => console.log(res.Search, res.totalResults))

        // console.log(this.homeService.returnTotal().subscribe(res => console.log(res)));
    }

    setTotal(value): void {
        this.total = value;
    }

    filmeDetalhes(id: string): void {
        this.router.navigate(["/filme-detalhes"], { queryParams: { id: id } });
    }

    previousOrNextPage(direction): any {
        let per = Math.ceil(this.total / 10);
        if (direction === "start") {
            this.currentPage = 1;
            this.show = true;
            this.sharedService
                .buscarFilmeOther(this.search, 1)
                .subscribe((res: any) => {
                    this.filmes = res.Search;
                    this.setTotal(res.totalResults);
                });
        }
        if (direction === "end") {
            this.show = false;
            this.sharedService
                .buscarFilmeOther(this.search, per)
                .subscribe((res: any) => {
                    this.filmes = res.Search;
                    this.setTotal(res.totalResults);
                });
        }
        if (direction === "previous") {
            this.show = true;
            if (this.currentPage-- > 1) {
                this.sharedService
                    .buscarFilmeOther(this.search, this.currentPage)
                    .subscribe((res: any) => {
                        this.filmes = res.Search;
                        this.setTotal(res.totalResults);
                    });
            } else {
                return;
            }
        }
        if (direction === "next") {
            this.show = true;
            if (this.currentPage++ <= per - 1) {
                this.sharedService
                    .buscarFilmeOther(this.search, this.currentPage)
                    .subscribe((res: any) => {
                        this.filmes = res.Search;
                        this.setTotal(res.totalResults);
                    });
            } else {
                return;
            }
        }
    }

    scroll(el: HTMLElement): void {
        el.scrollIntoView();
    }
}
