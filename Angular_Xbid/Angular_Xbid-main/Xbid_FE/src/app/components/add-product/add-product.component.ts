import { ProductsService } from './../../products.service';
import { UploadService } from './../../upload.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { IProduct } from '../../../interface/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  constructor(
    private uploadService: UploadService,
    private ProductsService: ProductsService
  ) {}
  productform = new FormGroup({
    name: new FormControl('', Validators.required),
    shortdescription: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    thumbnail: new FormControl('', Validators.required),
    images: new FormControl('', Validators.required),
    start_price: new FormControl('', Validators.required),
    start_time: new FormControl('', Validators.required),
    end_time: new FormControl('', Validators.required),
    step: new FormControl('', Validators.required),
  });
  thumbnail: string = '';
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    // uploadUrl: 'v1/image'
  };
  onUpload = (e: any) => {
    // console.log(e.target.files[0]);
    const dataform = new FormData();
    dataform.append('file', e.target.files[0]);
    this.uploadService.uploadImage(dataform).subscribe(
      (data: any) => {
        console.log(data);
        this.thumbnail = this.uploadService.API_URL + data?.url;
        this.productform.controls.thumbnail.setValue(
          this.uploadService.API_URL + data?.url
        );
      },
      (error) => {
        console.log(error);
      }
    );
  };
  // upload nhiều ảnh vào image gallery
  images: any;
  onAnyUpload = (e: any) => {
    console.log(e.target.files);

    const dataform = new FormData();
    for (let i = 0; i < e.target.files.length; i++) {
      dataform.append('file', e.target.files[i]);
    }
    this.uploadService.AnyuploadImage(dataform).subscribe(
      (data: any) => {
        console.log(data.url);
        // Lấy danh sách ảnh trả về từ API
        const listimg = data.url;
        // Bổ sung tiền tố http://localhost:8000( chính là base api url)
        for (let i = 0; i < listimg.length; i++) {
          listimg[i] = this.uploadService.API_URL + listimg[i];
        }

        // gán mảng ảnh sau khi đã bổ sung tiền tố http
        this.images = listimg;
        // Set giá trị cho thuộc tính images của productform
        this.productform.controls.images.setValue(listimg);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  onAddProduct = () => {
    console.log(this.productform.value);
    const productData = this.productform.value as IProduct;

    // Ensure category is a valid ObjectId string
    if (!productData.category || productData.category.trim() === '') {
      alert('Please select a category');
      return;
    }

    this.ProductsService.addProduct(productData).subscribe(
      (data) => {
        console.log(data);
        alert('Thêm sản phẩm thành công');
      },
      (error) => {
        console.log(error);
        alert('Error adding product');
      }
    );
  };
  categories: any = [];
  ngOnInit() {
    this.ProductsService.getCategories().subscribe((data) => {
      this.categories = data;
      console.log(this.categories);
    });
  }
}
