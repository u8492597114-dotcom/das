import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardGestionaleComponent } from './components/dashboard-gestionale/dashboard-gestionale.component';
import { ListaClientiComponent } from './components/lista-clienti/lista-clienti.component';
import { ListaFornitoriComponent } from './components/lista-fornitori/lista-fornitori.component';
import { GestioneArticoliComponent } from './components/gestione-articoli/gestione-articoli.component';
import { ListaOrdiniComponent } from './components/lista-ordini/lista-ordini.component';
import { ListaFattureComponent } from './components/lista-fatture/lista-fatture.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardGestionaleComponent },
  { path: 'clienti', component: ListaClientiComponent },
  { path: 'fornitori', component: ListaFornitoriComponent },
  { path: 'articoli', component: GestioneArticoliComponent },
  { path: 'ordini', component: ListaOrdiniComponent },
  { path: 'fatture', component: ListaFattureComponent },
];

@NgModule({
  declarations: [
    DashboardGestionaleComponent,
    ListaClientiComponent,
    ListaFornitoriComponent,
    GestioneArticoliComponent,
    ListaOrdiniComponent,
    ListaFattureComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GestionaleModule { }
