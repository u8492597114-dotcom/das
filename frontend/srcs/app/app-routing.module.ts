import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'gestionale',
    loadChildren: () => import('./modules/gestionale/gestionale.module').then(m => m.GestionaleModule)
  },
  {
    path: '',
    redirectTo: '/gestionale',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
