import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilContenuComponent } from './accueil-contenu/accueil-contenu.component';
import { AnnonceListComponent } from './annonce-list/annonce-list.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ConfidentialiteComponent } from './footer/confidentialite/confidentialite.component';
import { MentionsLegalesComponent } from './footer/mentions-legales/mentions-legales.component';
import { QuiSommesNousComponent } from './footer/qui-sommes-nous/qui-sommes-nous.component';

const routes: Routes = [
  {path:'' , redirectTo:'accueil', pathMatch:'full'},
  {path:'accueil', component:AccueilContenuComponent},
  {path:'confidentialite', component: ConfidentialiteComponent},
  {path:'mentions-legales', component: MentionsLegalesComponent},
  {path:"quisommesnous", component: QuiSommesNousComponent},
  {path: "annonces", component: AnnonceListComponent},
  {path: "auth", component: AuthentificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
