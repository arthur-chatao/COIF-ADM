import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagensEnviarPage } from './mensagens-enviar.page';

describe('MensagensEnviarPage', () => {
  let component: MensagensEnviarPage;
  let fixture: ComponentFixture<MensagensEnviarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagensEnviarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagensEnviarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
