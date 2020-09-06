import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartExercicePageRoutingModule } from './start-exercice-routing.module';

import { StartExercicePage } from './start-exercice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartExercicePageRoutingModule
  ],
  declarations: [StartExercicePage]
})
export class StartExercicePageModule {}
