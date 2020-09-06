import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MomentExercicePage } from './moment-exercice.page';

const routes: Routes = [
  {
    path: '',
    component: MomentExercicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MomentExercicePageRoutingModule {}
