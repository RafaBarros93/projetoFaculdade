import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAdvogadoComponent } from './cadastro-advogado.component';

describe('CadastroAdvogadoComponent', () => {
  let component: CadastroAdvogadoComponent;
  let fixture: ComponentFixture<CadastroAdvogadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAdvogadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAdvogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
