import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmiljeneComponent } from './omiljene.component';

describe('OmiljeneComponent', () => {
  let component: OmiljeneComponent;
  let fixture: ComponentFixture<OmiljeneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmiljeneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmiljeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
