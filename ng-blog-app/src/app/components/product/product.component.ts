import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Observable<Product[]>;
  
  constructor(private store: Store<AppState>) {
    this.products = this.store.select(state => state.product);
  }
  
  addProduct(name: any, price: any) {
    console.log(name, price);
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Product>{
        name: name,
        price: price
      }
    });
  }
  ngOnInit() {
  }
}