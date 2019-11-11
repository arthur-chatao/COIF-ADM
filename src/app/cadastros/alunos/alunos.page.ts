import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from 'src/app/curso/entidade/curso';
import { Alunos } from '../entidade/alunos';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  alunos: Alunos = new Alunos();
  listaCurso: Observable<Curso[]>;

  confirm: String;
  constructor(private banco: AngularFireDatabase, private rota: Router, public alertController: AlertController ) {
    this.listaCurso = this.banco.list<Curso>('curso').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  ngOnInit() {
  }

  salvar() {
    if (this.alunos.senhaResp == this.confirm) {
      this.banco.list('alunos').push(this.alunos);
      this.alunos = new Alunos();
      this.rota.navigate(['gerencia-mensagens']);
    }
    else{
      this.presentAlertlog();
    }

  }

  async presentAlertlog(){

      const alert = await this.alertController.create({
        header: 'Erro de Verificação',
        subHeader: 'As senhas devem ser Identicas',
        message: "Erro encontrado as senhas não são Iguais",
        buttons: ['OK']
      });

    await alert.present();
  }

}
