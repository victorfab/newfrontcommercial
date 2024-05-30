import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExportSubareaComponent } from './modal-export-subarea.component';

describe('ModalExportSubareaComponent', () => {
  let component: ModalExportSubareaComponent;
  let fixture: ComponentFixture<ModalExportSubareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExportSubareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExportSubareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
