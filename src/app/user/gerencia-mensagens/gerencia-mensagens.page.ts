import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Alunos } from 'src/app/cadastros/entidade/alunos';
import { map } from 'rxjs/operators'
import * as _ from 'lodash';
//import { ModalController } from '@ionic/angular';
//import {  } from '';


@Component({
  selector: 'app-gerencia-mensagens',
  templateUrl: './gerencia-mensagens.page.html',
  styleUrls: ['./gerencia-mensagens.page.scss'],
})
export class GerenciaMensagensPage implements OnInit {

  listaAlunos: Observable<Alunos[]>;
  listaFiltro: Alunos[];
  filtro = {}; //regras ativas do filtro
  alunos: any;
  valor: string;

  constructor(private menu: MenuController, private fire: AngularFireDatabase,private afAuth: AngularFireAuth, private router: Router,) {
    this.listaAlunos = this.fire.list<Alunos>('alunos').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );

  }


  ngOnInit() {
    this.listaAlunos.subscribe(cidade => {
      this.alunos = cidade;
      this.listaFiltro = _.filter(this.alunos, _.conforms(this.filtro));
    })
  }

  filtrar(){
    this.filtro['nomeAluno'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.alunos, _.conforms(this.filtro));
  }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  logout() {

    this.afAuth.auth.signOut();

    this.router.navigate(['home']);
  }
}
