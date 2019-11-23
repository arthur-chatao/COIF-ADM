import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensagens-arquivadas',
  templateUrl: './mensagens-arquivadas.page.html',
  styleUrls: ['./mensagens-arquivadas.page.scss'],
})
export class MensagensArquivadasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  back(){
		this.router.navigate(['gerencia-mensagens']);

	}

}
