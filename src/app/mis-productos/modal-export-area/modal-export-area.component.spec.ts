import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExportAreaComponent } from './modal-export-area.component';

describe('ModalExportAreaComponent', () => {
  let component: ModalExportAreaComponent;
  let fixture: ComponentFixture<ModalExportAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExportAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExportAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
