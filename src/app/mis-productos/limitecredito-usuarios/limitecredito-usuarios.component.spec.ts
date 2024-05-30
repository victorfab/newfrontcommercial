import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitecreditoUsuariosComponent } from './limitecredito-usuarios.component';

describe('LimitecreditoUsuariosComponent', () => {
  let component: LimitecreditoUsuariosComponent;
  let fixture: ComponentFixture<LimitecreditoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitecreditoUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitecreditoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
