import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
})
export class AddCategoryComponent {
  formCategory = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  constructor(private ProductsService: ProductsService) {}
  addCategory = () => {
    this.ProductsService.addCategory(this.formCategory.value).subscribe(
      (res) => {
        console.log(res);
        alert('Add category success');
      },
      (err) => {
        console.log(err);
      }
    );
  };
}
