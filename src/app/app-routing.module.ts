import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'gerencia-adm', loadChildren: './user/gerencia-adm/gerencia-adm.module#GerenciaAdmPageModule' },
  { path: 'gerencia-mensagens', loadChildren: './user/gerencia-mensagens/gerencia-mensagens.module#GerenciaMensagensPageModule' },
  { path: 'alunos', loadChildren: './cadastros/alunos/alunos.module#AlunosPageModule' },
  { path: 'curso-salvar', loadChildren: './curso/curso-salvar/curso-salvar.module#CursoSalvarPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
