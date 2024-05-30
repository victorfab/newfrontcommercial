import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSupertokenLimiteSubareaComponent } from './modal-supertoken-limite-subarea.component';

describe('ModalSupertokenLimiteSubareaComponent', () => {
  let component: ModalSupertokenLimiteSubareaComponent;
  let fixture: ComponentFixture<ModalSupertokenLimiteSubareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSupertokenLimiteSubareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSupertokenLimiteSubareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
