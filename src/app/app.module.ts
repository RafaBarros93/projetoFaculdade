import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';

import { AppComponent } from './app.component';

import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';

import{CadastroAdvogadoModule} from './cadastro-advogado/cadastro-advogado.module'

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CadastroAdvogadoModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
