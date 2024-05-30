import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionCreditoComponent } from './administracion-credito.component';

describe('AdministracionCreditoComponent', () => {
  let component: AdministracionCreditoComponent;
  let fixture: ComponentFixture<AdministracionCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionCreditoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministracionCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
