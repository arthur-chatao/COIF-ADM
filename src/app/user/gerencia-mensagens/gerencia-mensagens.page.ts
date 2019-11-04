import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-gerencia-mensagens',
  templateUrl: './gerencia-mensagens.page.html',
  styleUrls: ['./gerencia-mensagens.page.scss'],
})
export class GerenciaMensagensPage implements OnInit {

  constructor(private menu: MenuController) { }
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
}
