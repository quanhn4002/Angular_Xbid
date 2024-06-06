import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';
import { IProduct } from '../../../interface/product';

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrl: './chitiet.component.css',
})
export class ChitietComponent {
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}
  products: any;
  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.productsService.getProductById(productId).subscribe((data) => {
      // Populate single product with the specific product
      this.products = data;
      console.log('Product by ID:', data);
    });
  }
}
