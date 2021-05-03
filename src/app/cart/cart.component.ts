import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalPrice : number = 0;
  @Input() products : Product[];
  @Output() priceEmitter = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
    this.calculatePrice();
  }

  calculatePrice(){
    for(let i = 0; i < this.products.length; i++){
      this.totalPrice += this.products[i]['price']
    }
    this.priceEmitter.emit(this.totalPrice);
  }

}
