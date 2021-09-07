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
import { AnnonceFormComponent } from './annonce-form/annonce-form.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

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
    AnnonceFormComponent
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
