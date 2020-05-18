import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "star-rating",
    templateUrl: "./star-rating.component.html",
    styleUrls: ["./star-rating.component.scss"],
})
export class StarRatingComponent implements OnInit {
    public form: FormGroup;
    public rating: number;
    @Input() ratingValue: string;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.form = this.fb.group({
            rating: [this.getRating(), Validators.required],
        });
    }

    getRating(): number {
        if (this.ratingValue > "5") {
            // return (this.rating = parseInt(this.ratingValue) / 2);
            return (this.rating = Math.ceil(parseInt(this.ratingValue) / 2));
        } else {
            return parseInt(this.ratingValue);
        }
    }
}
