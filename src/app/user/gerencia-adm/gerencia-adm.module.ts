import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GerenciaAdmPage } from './gerencia-adm.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciaAdmPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GerenciaAdmPage]
})
export class GerenciaAdmPageModule {}
