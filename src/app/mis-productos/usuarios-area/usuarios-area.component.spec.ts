import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosAreaComponent } from './usuarios-area.component';

describe('UsuariosAreaComponent', () => {
  let component: UsuariosAreaComponent;
  let fixture: ComponentFixture<UsuariosAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
