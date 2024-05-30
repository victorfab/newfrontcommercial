import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradoNumeroComponent } from './filtrado-numero.component';

describe('FiltradoNumeroComponent', () => {
  let component: FiltradoNumeroComponent;
  let fixture: ComponentFixture<FiltradoNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltradoNumeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltradoNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
