import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagensRecebidasPage } from './mensagens-recebidas.page';

describe('MensagensRecebidasPage', () => {
  let component: MensagensRecebidasPage;
  let fixture: ComponentFixture<MensagensRecebidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagensRecebidasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagensRecebidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
