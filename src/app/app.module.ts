import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilContenuComponent } from './accueil-contenu/accueil-contenu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ConfidentialiteComponent } from './footer/confidentialite/confidentialite.component';
import { MentionsLegalesComponent } from './footer/mentions-legales/mentions-legales.component';
import { QuiSommesNousComponent } from './footer/qui-sommes-nous/qui-sommes-nous.component';
import { AnnonceListComponent } from './annonce-list/annonce-list.component';
import { AnnonceCardComponent } from './annonce-list/annonce-card/annonce-card.component';
import { AnnonceFilterComponent } from './annonce-list/annonce-filter/annonce-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilContenuComponent,
    NavbarComponent,
    FooterComponent,
    ConfidentialiteComponent,
    MentionsLegalesComponent,
    QuiSommesNousComponent,
    AnnonceListComponent,
    AnnonceCardComponent,
    AnnonceFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
