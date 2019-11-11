import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from 'src/app/curso/entidade/curso';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  listaCurso: Observable<Curso[]>;

  constructor(private banco: AngularFireDatabase, private rota: Router, ) {
		this.listaCurso = this.banco.list<Curso>('curso').snapshotChanges().pipe(
		map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
);
	  }

  ngOnInit() {
  }

  /*salvar() {
    this.banco.list('usuario').push(this.usuario);
    this.usuario = new Usuario();
    this.afAuth.auth.createUserWithEmailAndPassword(this.pessoa.email, this.pessoa.senha);
    this.rota.navigate(['cadProj']);
  }*/

}
