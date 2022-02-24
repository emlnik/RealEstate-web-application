import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NekretninadetaljiComponent } from './nekretninadetalji.component';

describe('NekretninadetaljiComponent', () => {
  let component: NekretninadetaljiComponent;
  let fixture: ComponentFixture<NekretninadetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NekretninadetaljiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NekretninadetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
