import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
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
import { CarousselComponent } from './caroussel/caroussel.component';
import {CarouselModule} from 'primeng/carousel';

import { ButtonModule } from 'primeng/button';

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
    AnnonceFilterComponent,
    CarousselComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule, 
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
