import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpinnerLoadComponent } from "./components/spinner-load/spinner-load.component";
import { StarRatingComponent } from "./components/star-rating/star-rating.component";
import { NgxStarRatingModule } from "ngx-star-rating";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        SpinnerLoadComponent,
        StarRatingComponent,
        StarRatingComponent
    ],
    imports: [CommonModule, NgxStarRatingModule, ReactiveFormsModule],
    exports: [SpinnerLoadComponent, StarRatingComponent]
})
export class SharedModule {}
