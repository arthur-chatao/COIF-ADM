import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MensagensRecebidasPage } from './mensagens-recebidas.page';

const routes: Routes = [
  {
    path: '',
    component: MensagensRecebidasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MensagensRecebidasPage]
})
export class MensagensRecebidasPageModule {}
