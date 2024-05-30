import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitecreditoAreaComponent } from './limitecredito-area.component';

describe('LimitecreditoAreaComponent', () => {
  let component: LimitecreditoAreaComponent;
  let fixture: ComponentFixture<LimitecreditoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitecreditoAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitecreditoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
