import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojenekretnijeComponent } from './mojenekretnije.component';

describe('MojenekretnijeComponent', () => {
  let component: MojenekretnijeComponent;
  let fixture: ComponentFixture<MojenekretnijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojenekretnijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MojenekretnijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
