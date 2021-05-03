import { Component, OnInit } from '@angular/core';
import { Product } from '../app/model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reusable-comp';

  products : Product[] = [];

  ngOnInit(){
    this.products.push(new Product('Gillete Razor','Shaving Razor', 100));
    this.products.push(new Product('Lenovo Laptop','Laptop', 2000));
    this.products.push(new Product('Trimmer','Hair trimmer', 2500));
  }

  priceEmitter(value){
    console.log('total sum is ', value);
  }


}
