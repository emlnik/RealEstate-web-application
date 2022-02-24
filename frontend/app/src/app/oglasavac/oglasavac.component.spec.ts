import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OglasavacComponent } from './oglasavac.component';

describe('OglasavacComponent', () => {
  let component: OglasavacComponent;
  let fixture: ComponentFixture<OglasavacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OglasavacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OglasavacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
