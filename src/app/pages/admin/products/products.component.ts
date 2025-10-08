import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgIf, CommonModule, FormsModule ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  isSidePanalVisible: boolean = false;
  productObj: any = {
  "productId": 0,
  "productSku": "",
  "productName": "",
  "productPrice": 0,
  "productShortName": "",
  "productDescription": "",
  "createdDate": new Date(),
  "deliveryTimeSpan": "",
  "categoryId": 2147483647,
  "productImageUrl": "",
  "userId": 0
  }

  categoryList: any[] = [];

  constructor( private productSrv: ProductService) {
    
  }

  ngOnInit(): void{ }
  
  getAllCategory() {
    this.productSrv.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }

  //Method (Function inside a Class) when click new it open to create 
  openSidePanal() {
    this.isSidePanalVisible = true;
  }
  // when click close it close the new product form
  closeSidePanal() {
    this.isSidePanalVisible = false;
  }
}
