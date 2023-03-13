import {Injectable} from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }
  ];

  constructor() {
  }

  getAll(): Product[] {
    return this.products;
  }

  saveProduct(product: Product) {
    this.products.push(product);
  }

  updateById(id: number, value) {
    this.products = this.products.map(item => {
      if (item.id === id) {
        return value;
      } else return item;
    })
  }

  getDetail(id): Product {
    return this.products.find((item) => item.id === id);
  }

  deleteProduct(idDelete: number) {
    this.products = this.products.filter(item => item.id !== idDelete);
  }
}
