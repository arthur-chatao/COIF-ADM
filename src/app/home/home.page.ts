import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { Pessoas } from 'src/app/adm/pessoas';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ip : String = "";
	senha : String = "";

	usuario: Pessoas = new Pessoas();


  constructor(private afAuth: AngularFireAuth, private router: Router, public alertController: AlertController) {}


  logar() {
    this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(
      () => { this.router.navigate(['mensagens-recebidas']); }
    ).catch((erro) => this.presentAlertlog(erro));
  }

  async presentAlertlog(erro) {

			const alert = await this.alertController.create({
				header: 'Usuario Invalido',
				subHeader: 'Erro Abaixo:',
				message: erro,
				buttons: ['OK']
			});

		await alert.present();
  }


}
