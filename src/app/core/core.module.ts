import { HttpClientModule } from '@angular/common/http';
import { NgModule} from '@angular/core';
import { NotFoundComponent } from './components';
import { RouterModule } from '@angular/router';
import { ApiService } from './services';

@NgModule({
  imports: [RouterModule, HttpClientModule],
  exports: [NotFoundComponent],
  declarations: [NotFoundComponent],
  providers: [ApiService]
})
export class CoreModule {}
