import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  toggled: boolean = true;

  constructor() {
    this.toggled = (localStorage.getItem('toggled') == 'false') ? false : true;
  }

  ngOnInit() {
    this.toggleSidenav();
  }

  toggleSidenav(){
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      (localStorage.getItem('toggled') == 'false') ? localStorage.setItem('toggled', 'true') : localStorage.setItem('toggled', 'false');
    });
  }

}
