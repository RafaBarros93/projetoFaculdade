import{FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{CadastroAdvogadoComponent} from './cadastro-advogado.component';
import { CadastroAdvogadoFormComponent } from './cadastro-advogado-form/cadastro-advogado-form.component';
import { CadastroAdvogadoListaComponent } from './cadastro-advogado-lista/cadastro-advogado-lista.component';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  providers:[AngularFireDatabase],
  exports: [CadastroAdvogadoFormComponent, CadastroAdvogadoListaComponent,CadastroAdvogadoComponent],
  declarations: [CadastroAdvogadoFormComponent, CadastroAdvogadoListaComponent,CadastroAdvogadoComponent]
})
export class CadastroAdvogadoModule { }
