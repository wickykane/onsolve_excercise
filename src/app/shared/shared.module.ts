import { NgModule } from '@angular/core';
import { TableService } from './services';
import { SortColumnDirective, cdArrowTable } from './directives';

@NgModule({
  imports: [],
  exports: [SortColumnDirective, cdArrowTable],
  declarations: [SortColumnDirective, cdArrowTable],
  providers: [TableService]
})
export class SharedModule {}
