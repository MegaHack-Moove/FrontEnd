import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpExercicePage } from './help-exercice.page';

const routes: Routes = [
  {
    path: '',
    component: HelpExercicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpExercicePageRoutingModule {}
