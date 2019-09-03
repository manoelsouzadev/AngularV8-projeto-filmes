import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeDetalhesComponent } from './filme-detalhes.component';

describe('FilmeDetalhesComponent', () => {
  let component: FilmeDetalhesComponent;
  let fixture: ComponentFixture<FilmeDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
