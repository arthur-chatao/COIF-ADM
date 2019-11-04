import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GerenciaMensagensPage } from './gerencia-mensagens.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciaMensagensPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GerenciaMensagensPage]
})
export class GerenciaMensagensPageModule {}
