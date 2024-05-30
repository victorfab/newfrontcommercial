import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoCargadoComponent } from './archivo-cargado.component';

describe('ArchivoCargadoComponent', () => {
  let component: ArchivoCargadoComponent;
  let fixture: ComponentFixture<ArchivoCargadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivoCargadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivoCargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
