import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalOffersComponent } from './promotional-offers.component';

describe('PromotionalOffersComponent', () => {
  let component: PromotionalOffersComponent;
  let fixture: ComponentFixture<PromotionalOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionalOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionalOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
