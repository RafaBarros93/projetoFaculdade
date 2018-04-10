import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAdvogadoFormComponent } from './cadastro-advogado-form.component';

describe('CadastroAdvogadoFormComponent', () => {
  let component: CadastroAdvogadoFormComponent;
  let fixture: ComponentFixture<CadastroAdvogadoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAdvogadoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAdvogadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
