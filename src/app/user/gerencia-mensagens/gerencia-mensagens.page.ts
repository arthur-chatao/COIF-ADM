import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerencia-mensagens',
  templateUrl: './gerencia-mensagens.page.html',
  styleUrls: ['./gerencia-mensagens.page.scss'],
})
export class GerenciaMensagensPage implements OnInit {

  constructor(private menu: MenuController,private afAuth: AngularFireAuth, private router: Router) { }
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
