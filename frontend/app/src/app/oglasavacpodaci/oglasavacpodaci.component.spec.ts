import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OglasavacpodaciComponent } from './oglasavacpodaci.component';

describe('OglasavacpodaciComponent', () => {
  let component: OglasavacpodaciComponent;
  let fixture: ComponentFixture<OglasavacpodaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OglasavacpodaciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OglasavacpodaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
