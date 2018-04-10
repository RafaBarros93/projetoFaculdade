import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';
import{Observable}from 'rxjs/Observable';

@Component({
  selector: 'app-cadastro-advogado-lista',
  templateUrl: './cadastro-advogado-lista.component.html',
  styleUrls: ['./cadastro-advogado-lista.component.css']
})
export class CadastroAdvogadoListaComponent implements OnInit {

  pessoas: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.pessoas = db.list('pessoas').valueChanges();
   }
    
  
  ngOnInit() {
    
}
 dataHoje() {
  var data = new Date();
  var dia = data.getDate();
  var mes = data.getMonth() + 1;
  var ano = data.getFullYear();
  return [dia, mes, ano].join('/');
  }
}
