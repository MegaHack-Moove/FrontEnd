import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'start-exercice',
    loadChildren: () => import('./start-exercice/start-exercice.module').then( m => m.StartExercicePageModule)
  },
  {
    path: 'moment-exercice',
    loadChildren: () => import('./moment-exercice/moment-exercice.module').then( m => m.MomentExercicePageModule)
  },
  {
    path: 'help-exercice',
    loadChildren: () => import('./help-exercice/help-exercice.module').then( m => m.HelpExercicePageModule)
  },
  {
    path: 'paciente',
    loadChildren: () => import('./paciente/paciente.module').then( m => m.PacientePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
