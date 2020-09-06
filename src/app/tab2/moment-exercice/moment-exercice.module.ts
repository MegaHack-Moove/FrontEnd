import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MomentExercicePageRoutingModule } from './moment-exercice-routing.module';

import { MomentExercicePage } from './moment-exercice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentExercicePageRoutingModule
  ],
  declarations: [MomentExercicePage]
})
export class MomentExercicePageModule {}
