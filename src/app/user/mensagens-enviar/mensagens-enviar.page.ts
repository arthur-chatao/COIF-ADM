import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Enviar } from 'src/app/user/entidade/enviar';


@Component({
  selector: 'app-mensagens-enviar',
  templateUrl: './mensagens-enviar.page.html',
  styleUrls: ['./mensagens-enviar.page.scss'],
})
export class MensagensEnviarPage implements OnInit {
  enviosAdm: Enviar = new Enviar();

  constructor(private banco: AngularFireDatabase, private rota: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  salvar(){
    this.banco.list('enviosAdm').push(this.enviosAdm);
    this.enviosAdm = new Enviar();
    this.presentAlertlog();
    this.rota.navigate(['gerencia-mensagens']);
  }

  async presentAlertlog(){

      const alert = await this.alertController.create({
        header: 'Enviada com Sucesso',
        subHeader: 'Mensagem entregue ao destinatario',
        message: "Aguarde até que o responsável autorize!",
        buttons: ['OK']
      });

    await alert.present();
  }


}
