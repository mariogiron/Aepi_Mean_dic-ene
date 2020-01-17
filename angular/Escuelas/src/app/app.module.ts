import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaStudentsComponent } from './lista-students/lista-students.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { FormStudentsComponent } from './form-students/form-students.component';
import { TestPipesComponent } from './test-pipes/test-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaStudentsComponent,
    RegistroComponent,
    LoginComponent,
    FormStudentsComponent,
    TestPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
