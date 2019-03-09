import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/core/services';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private marvelService: MarvelService) { }
  public _data = {};

  ngOnInit() {
    this._data['id'] = this.route.snapshot.params['id'];
    this.getDetailCharacter();
  }

  getDetailCharacter() {
    this._data['loading'] = true;
    forkJoin(
      this.marvelService.getDetailCharacter(this._data['id']),
      this.marvelService.getListComicOfCharacter(this._data['id'])).pipe(finalize( () => {
        this._data['loading'] = false;
      })).subscribe(results => {
        this._data['character'] = results[0];
        this._data['comics'] = results[1];
      });
  }

}
