import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazpretrageComponent } from './prikazpretrage.component';

describe('PrikazpretrageComponent', () => {
  let component: PrikazpretrageComponent;
  let fixture: ComponentFixture<PrikazpretrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikazpretrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazpretrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
