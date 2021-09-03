import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilContenuComponent } from './accueil-contenu/accueil-contenu.component';
import { ConfidentialiteComponent } from './footer/confidentialite/confidentialite.component';
import { MentionsLegalesComponent } from './footer/mentions-legales/mentions-legales.component';

const routes: Routes = [
  {path:'' , redirectTo:'accueil', pathMatch:'full'},
  {path:'accueil', component:AccueilContenuComponent},
  {path:'confidentialite', component: ConfidentialiteComponent},
  {path:'mentions-legales', component: MentionsLegalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
