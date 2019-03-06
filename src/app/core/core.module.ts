import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent, NotFoundComponent } from './components';

@NgModule({
  imports: [],
  exports: [HeaderComponent, FooterComponent, NotFoundComponent],
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent],
  providers: []
})
export class CoreModule {}
