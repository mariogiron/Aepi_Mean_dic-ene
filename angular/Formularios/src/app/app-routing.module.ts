import { ListaPlanetasComponent } from './lista-planetas/lista-planetas.component';
import { TemplateComponent } from './template/template.component';
import { ModelComponent } from './model/model.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'model', component: ModelComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'planetas', component: ListaPlanetasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
