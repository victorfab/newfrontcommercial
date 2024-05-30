import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaSupertokenLimiteAreaComponent } from './moda-supertoken-limite-area.component';

describe('ModaSupertokenLimiteAreaComponent', () => {
  let component: ModaSupertokenLimiteAreaComponent;
  let fixture: ComponentFixture<ModaSupertokenLimiteAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaSupertokenLimiteAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaSupertokenLimiteAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
