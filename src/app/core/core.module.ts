import { NgModule} from '@angular/core';
import { HeaderComponent, FooterComponent, NotFoundComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule ],
  exports: [HeaderComponent, FooterComponent, NotFoundComponent],
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent],
  providers: []
})
export class CoreModule {}
