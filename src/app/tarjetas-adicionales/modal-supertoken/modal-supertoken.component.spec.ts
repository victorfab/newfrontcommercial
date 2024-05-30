import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSupertokenComponent } from './modal-supertoken.component';

describe('ModalSupertokenComponent', () => {
  let component: ModalSupertokenComponent;
  let fixture: ComponentFixture<ModalSupertokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSupertokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSupertokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
