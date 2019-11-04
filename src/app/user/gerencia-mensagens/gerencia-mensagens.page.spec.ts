import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaMensagensPage } from './gerencia-mensagens.page';

describe('GerenciaMensagensPage', () => {
  let component: GerenciaMensagensPage;
  let fixture: ComponentFixture<GerenciaMensagensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciaMensagensPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciaMensagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
