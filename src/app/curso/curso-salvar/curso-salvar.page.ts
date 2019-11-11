import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

import { Curso } from '../entidade/curso';
@Component({
  selector: 'app-curso-salvar',
  templateUrl: './curso-salvar.page.html',
  styleUrls: ['./curso-salvar.page.scss'],
})
export class CursoSalvarPage implements OnInit {

  curso: Curso = new Curso();

  constructor(private fire:AngularFireDatabase, private rota:Router) { }

  ngOnInit() {
  }

  salvar(){
    this.fire.list('curso').push(this.curso);
    this.curso = new Curso();
    this.rota.navigate(['alunos']);
  }


}
