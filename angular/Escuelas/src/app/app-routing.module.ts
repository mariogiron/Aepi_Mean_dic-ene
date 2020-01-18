import { SemaforoComponent } from './semaforo/semaforo.component';
import { TestPipesComponent } from './test-pipes/test-pipes.component';
import { FormStudentsComponent } from './form-students/form-students.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaStudentsComponent } from './lista-students/lista-students.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'students', component: ListaStudentsComponent },
  { path: 'students/new', component: FormStudentsComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pipes', component: TestPipesComponent },
  { path: 'semaforo', component: SemaforoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
