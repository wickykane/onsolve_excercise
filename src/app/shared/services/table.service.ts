import { Injectable } from '@angular/core';

@Injectable()
export class TableService {
  constructor() {}

  private itemPerPageOptions = [15, 30, 50, 100];
  private maxSize = 5;

  private sortParams = {
    order: null,
    sort: null
  };

  private paginationConfig: any = {
    context: null,
    fnName: 'getList',
    length: 'limit',
    page: 'offset',
    order: 'orderBy',
    sort: 'sort',
    total_page: 'count',
    total_record: 'total_record',
  };

  private pagination = {};

  init(config?) {
    if (config) {
      this.paginationConfig = {  ...this.paginationConfig, ...config };
    }
  }

  invokeGetList() {
    this.paginationConfig.context[this.paginationConfig.fnName]();
  }

  getParams() {
    const params = {};
    params[this.paginationConfig.page] = this.pagination[this.paginationConfig.page] || 1;
    params[this.paginationConfig.length] = this.pagination[this.paginationConfig.length] || 15;

    /* check sort */
    if (this.sortParams[this.paginationConfig.order]) {
      params[this.paginationConfig.order] = this.sortParams[this.paginationConfig.order];
    } 

    if (this.sortParams[this.paginationConfig.sort]) {
      params[this.paginationConfig.sort] = this.sortParams[this.paginationConfig.sort] === 1 ? 'asc' : 'desc';
    }

    return params;
  }

  sortAction(data) {
    this.invokeGetList();
  }

  changeLength() {
    this.pagination['page'] = 1;
    this.invokeGetList();
  }

  matchPagingOption(options) {
    try {
      this.pagination[this.paginationConfig.total_page] = options[this.paginationConfig.total_page];
      this.pagination[this.paginationConfig.total_record] = options[this.paginationConfig.total_record];
      this.pagination[this.paginationConfig.page] = options[this.paginationConfig.page];
    } catch (e) {
      console.log('pagination', e);
    }
  }

  changePage(index) {
    this.pagination[this.paginationConfig.page] = index;
    this.invokeGetList();
  }
}
