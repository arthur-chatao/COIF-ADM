import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MensagensArquivadasPage } from './mensagens-arquivadas.page';

const routes: Routes = [
  {
    path: '',
    component: MensagensArquivadasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MensagensArquivadasPage]
})
export class MensagensArquivadasPageModule {}
