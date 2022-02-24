import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaagencijaComponent } from './novaagencija.component';

describe('NovaagencijaComponent', () => {
  let component: NovaagencijaComponent;
  let fixture: ComponentFixture<NovaagencijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaagencijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaagencijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
