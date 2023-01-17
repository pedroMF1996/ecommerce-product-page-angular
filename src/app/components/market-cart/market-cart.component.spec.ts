import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketCartComponent } from './market-cart.component';

describe('MarketCartComponent', () => {
  let component: MarketCartComponent;
  let fixture: ComponentFixture<MarketCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
