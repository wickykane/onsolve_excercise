import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel',
  template: '<app-marvel-header></app-marvel-header><router-outlet></router-outlet><app-marvel-footer></app-marvel-footer>'
})
export class MarvelComponent implements OnInit {
  constructor() {}

  ngOnInit() {

  }
}
