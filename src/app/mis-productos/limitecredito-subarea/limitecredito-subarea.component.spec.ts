import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitecreditoSubareaComponent } from './limitecredito-subarea.component';

describe('LimitecreditoSubareaComponent', () => {
  let component: LimitecreditoSubareaComponent;
  let fixture: ComponentFixture<LimitecreditoSubareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitecreditoSubareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitecreditoSubareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
