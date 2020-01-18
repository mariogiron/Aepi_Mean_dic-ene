import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaStudentsComponent } from './lista-students/lista-students.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { FormStudentsComponent } from './form-students/form-students.component';
import { TestPipesComponent } from './test-pipes/test-pipes.component';
import { CapitalizePipe } from './capitalize.pipe';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { ModificadorContadorComponent } from './modificador-contador/modificador-contador.component';
import { VisorContadorComponent } from './visor-contador/visor-contador.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaStudentsComponent,
    RegistroComponent,
    LoginComponent,
    FormStudentsComponent,
    TestPipesComponent,
    CapitalizePipe,
    SemaforoComponent,
    ModificadorContadorComponent,
    VisorContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
}
