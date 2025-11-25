import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivosListar } from './festivos-listar';

describe('FestivosListar', () => {
  let component: FestivosListar;
  let fixture: ComponentFixture<FestivosListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestivosListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestivosListar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
