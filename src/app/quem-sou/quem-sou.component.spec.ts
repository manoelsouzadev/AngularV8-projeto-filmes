import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemSouComponent } from './quem-sou.component';

describe('QuemSouComponent', () => {
  let component: QuemSouComponent;
  let fixture: ComponentFixture<QuemSouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuemSouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuemSouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
