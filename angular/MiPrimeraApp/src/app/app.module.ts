import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { CronometroComponent } from './cronometro/cronometro.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    CronometroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
