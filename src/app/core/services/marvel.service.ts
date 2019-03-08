import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class MarvelService {
  constructor(private API: ApiService) {}

  getListCharacter(params) {
    const uri = '/v1/public/characters';
    return this.API.get(uri, { ...params, apikey: environment.api_key });
  }
}
