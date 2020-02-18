import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss']
})
export class BottomMenuComponent implements OnInit {

  private home;
  constructor() { }

  ngOnInit() {
    this.home = document.getElementById("home");
  }

  addClass(){
    this.home.classList.add("active");
}

removeClass(){
    console.log(this.home);
    this.home.style.borderColor = "blue";
}
}
