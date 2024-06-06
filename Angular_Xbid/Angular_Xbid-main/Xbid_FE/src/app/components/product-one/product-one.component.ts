import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrl: './product-one.component.css',
})
export class ProductOneComponent {
  constructor(private ProductsService: ProductsService) {}
  products: any = [];
  ngOnInit(): void {
    this.ProductsService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }
}
