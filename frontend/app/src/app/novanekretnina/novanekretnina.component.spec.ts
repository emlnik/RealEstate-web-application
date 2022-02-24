import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovanekretninaComponent } from './novanekretnina.component';

describe('NovanekretninaComponent', () => {
  let component: NovanekretninaComponent;
  let fixture: ComponentFixture<NovanekretninaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovanekretninaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovanekretninaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
