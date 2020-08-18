import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Exercicio 2 aula 20';
  dados: Array<any>;

  constructor(private dataService: DataService) {
    this.dados = new Array<any>();
  }

  getAlldados() {
    this.dataService.getData().subscribe((dados) => {
      this.dados = dados;
    });
  }
 
  }
