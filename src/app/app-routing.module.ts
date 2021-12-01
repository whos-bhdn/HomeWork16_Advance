import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { Hw12Component } from './pages/hw12/hw12.component';
import { Hw13Component } from './pages/hw13/hw13.component';
import { Hw14Component } from './pages/hw14/hw14.component';
import { Hw15Component } from './pages/hw15/hw15.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'works/hw12', component: Hw12Component },
  { path: 'works/hw13', component: Hw13Component },
  { path: 'works/hw14', component: Hw14Component },
  { path: 'works/hw15', component: Hw15Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
