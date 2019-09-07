import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  protected rating: number;
  protected form: FormGroup;
 
  constructor(private fb: FormBuilder){
    this.rating = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }
}
