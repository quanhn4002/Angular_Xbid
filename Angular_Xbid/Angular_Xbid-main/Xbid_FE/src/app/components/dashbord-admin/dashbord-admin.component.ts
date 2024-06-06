import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashbord-admin',
  templateUrl: './dashbord-admin.component.html',
  styleUrl: './dashbord-admin.component.css',
})
export class DashbordAdminComponent {
  constructor(private ProductsService: ProductsService) {}
  products: any = [];
  ngOnInit() {
    this.ProductsService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
}
