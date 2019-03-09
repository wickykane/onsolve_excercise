import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/core/services';
import { TableService } from 'src/app/shared/services';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marvel-home',
  templateUrl: './marvel-home.component.html',
  styleUrls: ['./marvel-home.component.scss'],
  providers: [TableService]
})
export class MarvelHomeComponent implements OnInit {
  constructor(
    private router: Router,
    private marvelService: MarvelService,
    private tableService: TableService,
  ) {
    this.tableService.init({
      context: this,
      fnName: 'getListMarvelCharacters'
    });
  }

  public _data = {};
  public selectedIndex = 0;

  ngOnInit() {
    this.getListMarvelCharacters();
  }

  getListMarvelCharacters() {
    this._data['loading'] = true;
    const params = { ...this.tableService.getParams() };
    this.marvelService.getListCharacter(params).pipe(finalize(() => {
      this._data['loading'] = false;
    })).subscribe(res => {
      this._data['list_item'] = res.data.results;
      this.tableService.matchPagingOption(res.data);
    });
  }

  goToDetail(index) {
    const id = this._data['list_item'][index]['id'];
    if (id) {
      this.router.navigate(['marvel', 'detail', id]);
    }
  }
}
