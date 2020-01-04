import { RandomGuard } from './random.guard';
import { RelatedComponent } from './related/related.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LibrosComponent } from './libros/libros.component';
import { SaludoComponent } from './saludo/saludo.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'info' },
  { path: 'info', component: InfoComponent, canActivate: [RandomGuard] },
  { path: 'about', component: AboutComponent },
  // { path: 'saludo', component: SaludoComponent },
  { path: 'saludo/:texto', component: SaludoComponent },
  {
    path: 'libros/:libroId', component: LibrosComponent, children: [
      { path: 'reviews', component: ReviewsComponent },
      { path: 'related', component: RelatedComponent }
    ]
  },
  { path: '**', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
