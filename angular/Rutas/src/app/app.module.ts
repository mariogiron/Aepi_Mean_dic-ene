import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { SaludoComponent } from './saludo/saludo.component';
import { LibrosComponent } from './libros/libros.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RelatedComponent } from './related/related.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    InfoComponent,
    SaludoComponent,
    LibrosComponent,
    ReviewsComponent,
    RelatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
