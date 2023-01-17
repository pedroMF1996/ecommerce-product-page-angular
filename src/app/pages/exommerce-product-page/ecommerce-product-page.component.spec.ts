import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceProductPageComponent } from './ecommerce-product-page.component';

describe('ExommerceProductPageComponent', () => {
  let component: EcommerceProductPageComponent;
  let fixture: ComponentFixture<EcommerceProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceProductPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
