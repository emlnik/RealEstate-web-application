import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovajsonComponent } from './novajson.component';

describe('NovajsonComponent', () => {
  let component: NovajsonComponent;
  let fixture: ComponentFixture<NovajsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovajsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovajsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
