import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartExercicePage } from './start-exercice.page';

const routes: Routes = [
  {
    path: '',
    component: StartExercicePage
  },
  {
    path: 'moment-exercice',
    loadChildren: () => import('../moment-exercice/moment-exercice.module').then( m => m.MomentExercicePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartExercicePageRoutingModule {}
