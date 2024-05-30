import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradoSubareasComponent } from './filtrado-subareas.component';

describe('FiltradoSubareasComponent', () => {
  let component: FiltradoSubareasComponent;
  let fixture: ComponentFixture<FiltradoSubareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltradoSubareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltradoSubareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
