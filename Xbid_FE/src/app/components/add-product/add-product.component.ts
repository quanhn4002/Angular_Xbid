import { UploadService } from './../../upload.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  constructor(private uploadService: UploadService) {}
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
}
