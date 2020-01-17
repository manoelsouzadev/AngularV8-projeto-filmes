import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "star-rating",
    templateUrl: "./star-rating.component.html",
    styleUrls: ["./star-rating.component.scss"]
})
export class StarRatingComponent implements OnInit {
    public form: FormGroup;
    @Input() ratingValue: string;
    public rating: number;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.form = this.fb.group({
            rating: [this.getRating(), Validators.required]
        });
    }

    getRating() {
        if (this.ratingValue > "5") {
            return (this.rating = parseInt(this.ratingValue) / 2);
        } else {
            return parseInt(this.ratingValue);
        }
    }
}
