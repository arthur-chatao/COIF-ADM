import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaAdmPage } from './gerencia-adm.page';

describe('GerenciaAdmPage', () => {
  let component: GerenciaAdmPage;
  let fixture: ComponentFixture<GerenciaAdmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciaAdmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciaAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
