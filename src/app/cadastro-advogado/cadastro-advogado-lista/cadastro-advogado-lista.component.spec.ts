import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAdvogadoListaComponent } from './cadastro-advogado-lista.component';

describe('CadastroAdvogadoListaComponent', () => {
  let component: CadastroAdvogadoListaComponent;
  let fixture: ComponentFixture<CadastroAdvogadoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAdvogadoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAdvogadoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
