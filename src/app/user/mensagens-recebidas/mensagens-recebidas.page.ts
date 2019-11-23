import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import * as _ from 'lodash';
import { Renv } from 'src/app/resp-env/renv';


@Component({
  selector: 'app-mensagens-recebidas',
  templateUrl: './mensagens-recebidas.page.html',
  styleUrls: ['./mensagens-recebidas.page.scss'],
})
export class MensagensRecebidasPage implements OnInit {

  listaResp: Observable<Renv[]>;


  constructor(private menu: MenuController,private afAuth: AngularFireAuth, private router: Router,private fire: AngularFireDatabase){
    this.listaResp = this.fire.list<Renv>('respostasUsers', ref =>
      ref.orderByChild("dia").limitToLast(15)).snapshotChanges().pipe(
    map(lista => lista.map(linha => ({
      key: linha.payload.key, ...linha.payload.val()
    })))
  );

  }

  ngOnInit() {
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
