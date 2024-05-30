import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastreoEnvioComponent } from './rastreo-envio.component';

describe('RastreoEnvioComponent', () => {
  let component: RastreoEnvioComponent;
  let fixture: ComponentFixture<RastreoEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RastreoEnvioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RastreoEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
