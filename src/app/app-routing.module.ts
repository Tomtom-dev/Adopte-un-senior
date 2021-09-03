import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';

const routes: Routes = [
  {path:"quisommesnous", component: QuiSommesNousComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
