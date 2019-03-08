import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/core/services';
import { TableService } from 'src/app/shared/services';

@Component({
  selector: 'app-marvel-home',
  templateUrl: './marvel-home.component.html',
  styleUrls: ['./marvel-home.component.scss'],
  providers: [TableService, MarvelService]
})
export class MarvelHomeComponent implements OnInit {
  constructor(
    private marvelService: MarvelService,
    private tableService: TableService
  ) {
    this.tableService.init({
      context: this,
      fnName: 'getListMarvelCharacters'
    });
  }

  public _data = {};

  ngOnInit() {
    this.getListMarvelCharacters();
  }

  getListMarvelCharacters() {
    const params = { ...this.tableService.getParams() };
    this.marvelService.getListCharacter(params).subscribe(res => {
      this._data['list_item'] = res.data.results;
    });
  }
}
