import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-cadastro-advogado-form',
  templateUrl: './cadastro-advogado-form.component.html',
  styleUrls: ['./cadastro-advogado-form.component.css']
})
export class CadastroAdvogadoFormComponent implements OnInit {

  constructor( private angularFire: AngularFireDatabase) { }

  ngOnInit() {}
  
  form_submit(f: NgForm) {
    this.angularFire.list("pessoas").push(
    {
    nome: f.controls.nome.value,
    oab: f.controls.oab.value,
    numeroPreso: f.controls.numeroPreso.value,
    localizacao: f.controls.localizacao.value,
    presidio:f.controls.presidio.value,
    cela:f.controls.cela.value
    }
    ).then((t: any) => console.log('dados gravados: ' + t.key)),
    (e: any) => console.log(e.message);
    f.controls.nome.setValue('');
    f.controls.oab.setValue('');
    f.controls.numeroPreso.setValue('');
    f.controls.localizacao.setValue('');
    f.controls.presidio.setValue('');
    f.controls.cela.setValue('');
    }


}


