import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccueilContenuComponent } from './accueil-contenu/accueil-contenu.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilContenuComponent,
    QuiSommesNousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
