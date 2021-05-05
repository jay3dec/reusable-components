import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from '../model/product';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    component.products = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });

  
  it('should call calculatePrice', () => {
    component.products = [new Product("dummy","dummy",120), new Product("dummy","dummy",120)];
    component.priceEmitter.subscribe((response) => {
      expect(response).toEqual(240);
    })
    component.calculatePrice();
  })
 

  
});
