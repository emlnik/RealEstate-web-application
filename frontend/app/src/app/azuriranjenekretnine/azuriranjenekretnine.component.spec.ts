import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzuriranjenekretnineComponent } from './azuriranjenekretnine.component';

describe('AzuriranjenekretnineComponent', () => {
  let component: AzuriranjenekretnineComponent;
  let fixture: ComponentFixture<AzuriranjenekretnineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzuriranjenekretnineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzuriranjenekretnineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
