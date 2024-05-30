import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradoAreaComponent } from './filtrado-area.component';

describe('FiltradoAreaComponent', () => {
  let component: FiltradoAreaComponent;
  let fixture: ComponentFixture<FiltradoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltradoAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltradoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
