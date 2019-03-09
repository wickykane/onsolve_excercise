import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class MarvelService {
  constructor(private API: ApiService) { }

  getListCharacter(params) {
    const uri = '/v1/public/characters';
    return this.API.get(uri, { ...params, apikey: environment.api_key });
  }

  getDetailCharacter(id) {
    const uri = '/v1/public/characters/' + id;
    return this.API.get(uri, { apikey: environment.api_key }).pipe(map(res => res.data.results[0] ));
  }

  getListComicOfCharacter(id) {
    const uri = '/v1/public/characters/' + id + '/comics';
    return this.API.get(uri, { apikey: environment.api_key }).pipe(map(res => res.data.results));
  }
}
