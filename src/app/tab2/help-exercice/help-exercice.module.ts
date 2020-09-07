import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpExercicePageRoutingModule } from './help-exercice-routing.module';

import { HelpExercicePage } from './help-exercice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpExercicePageRoutingModule
  ],
  declarations: [HelpExercicePage]
})
export class HelpExercicePageModule {}
