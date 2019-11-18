import { BrMasker4Module } from 'brmasker4';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MensagensEnviarPage } from './mensagens-enviar.page';

const routes: Routes = [
  {
    path: '',
    component: MensagensEnviarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMasker4Module,
    RouterModule.forChild(routes)
  ],
  declarations: [MensagensEnviarPage]
})
export class MensagensEnviarPageModule {}