import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeNaoEncontradoComponent } from './filme-nao-encontrado.component';

describe('FilmeNaoEncontradoComponent', () => {
  let component: FilmeNaoEncontradoComponent;
  let fixture: ComponentFixture<FilmeNaoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeNaoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
