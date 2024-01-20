import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { threadId } from 'worker_threads';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  isSidePanelVisible: boolean = false;

  productObj:any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""
  };

  categoryList: any[] =[];
  productList: any[] =[];


  constructor(private productsrv:ProductService){

  }

  ngOnInit(): void {
    this.GetAllCategory();
    this.GetAllProducts();
  }

  GetAllCategory(){
    this.productsrv.getCategory().subscribe((res:any)=>{
      this.categoryList = res.data;
    });
  }

  GetAllProducts(){
    this.productsrv.getProduct().subscribe((res:any)=>{
      this.productList = res.data;
    });
  }
  addNewProduct(){

   return this.isSidePanelVisible = true;
  }

  closeProduct(){
    return this.isSidePanelVisible = false;
  }

  onSave(){
    this.productsrv.saveProduct(this.productObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert('product created');
        this.GetAllProducts();
      } else {
        alert(res.message)
      }
    })
  }


}
