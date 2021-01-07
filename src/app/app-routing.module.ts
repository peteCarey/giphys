import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphysComponent } from './giphys/giphys.component';

const routes: Routes = [{ path: '', component: GiphysComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
