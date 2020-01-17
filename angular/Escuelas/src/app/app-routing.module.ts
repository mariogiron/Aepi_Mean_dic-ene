import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaStudentsComponent } from './lista-students/lista-students.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'students', component: ListaStudentsComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
