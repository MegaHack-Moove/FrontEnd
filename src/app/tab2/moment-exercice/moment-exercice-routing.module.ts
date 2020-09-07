import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MomentExercicePage } from './moment-exercice.page';

const routes: Routes = [
  {
    path: '',
    component: MomentExercicePage
  },
  {
    path: 'help-exercice',
    loadChildren: () => import('../help-exercice/help-exercice.module').then( m => m.HelpExercicePageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('../../tab3/tab3.module').then(m => m.Tab3PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MomentExercicePageRoutingModule {}
