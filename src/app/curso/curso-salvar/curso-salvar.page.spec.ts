import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoSalvarPage } from './curso-salvar.page';

describe('CursoSalvarPage', () => {
  let component: CursoSalvarPage;
  let fixture: ComponentFixture<CursoSalvarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoSalvarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoSalvarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
