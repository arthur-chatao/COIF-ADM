import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Pessoas } from 'src/app/adm/pessoas';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gerencia-adm',
  templateUrl: './gerencia-adm.page.html',
  styleUrls: ['./gerencia-adm.page.scss'],
})
export class GerenciaAdmPage implements OnInit {
  pessoa : Pessoas = new Pessoas();
  confirmar : string;
  constructor( private router: Router, private afAuth: AngularFireAuth, public alertController: AlertController) { }

  ngOnInit() {
  }

  salvar() {
    if(this.pessoa.senha ==  this.confirmar){
      this.afAuth.auth.createUserWithEmailAndPassword(this.pessoa.email, this.pessoa.senha);
      this.router.navigate(['home']);
    }

    else{
      this.presentAlertlog();
    }

  }

	back(){
		this.router.navigate(['home']);

	}

  async presentAlertlog() {

			const alert = await this.alertController.create({
				header: 'Senha Invalida',
				subHeader: 'Algum caracter deve ter sido digitado errado',
				message: 'As senhas devem ser identicas',
				buttons: ['OK']
			});

		await alert.present();
  }
}
