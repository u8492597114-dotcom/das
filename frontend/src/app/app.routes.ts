import { Routes } from '@angular/router';

export const routes: Routes = [
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
