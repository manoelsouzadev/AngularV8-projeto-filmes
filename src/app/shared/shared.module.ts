import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerLoadComponent } from './components/spinner-load/spinner-load.component';



@NgModule({
  declarations: [SpinnerLoadComponent],
  imports: [
    CommonModule
  ],
  exports:[
      SpinnerLoadComponent
  ]
})
export class SharedModule { }
