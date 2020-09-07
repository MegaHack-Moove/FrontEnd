import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorDashboardPage } from './doctor-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorDashboardPage
  },
  {
    path: 'paciente',
    loadChildren: () => import('../../tab2/paciente/paciente.module').then( m => m.PacientePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorDashboardPageRoutingModule {}
