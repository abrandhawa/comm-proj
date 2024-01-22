import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
// import { Comment } from '../../../../Models/models';
import { Pipe, PipeTransform } from '@angular/core';



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
    
    "id": '',
    "title": " ",
    "description": "",
    "price": '',
    "discountPercentage": '' ,
    "rating": '',
    "stock": '',
    "brand": "",
    "category": "",
    "thumbnail": "",
    "images": ""
  };
   
  productList:any[]=[];
  CategoryList:any[]=[];
   
  
  
 


  constructor(private productsrv:ProductService){

  }

  ngOnInit(): void {
    this.GetAllCategories()
    this.GetAllProducts();
  }

  // GetAllCategory(){
  //   this.productsrv.getCategory().subscribe((res:any)=>{
  //     this.categoryList = res.data;
  //   });
  // }

  GetAllProducts(){
    this.productsrv.getPost().subscribe((comments:any) => {
      this.productList = comments?.products;
    });
  }


  GetAllCategories(){
    this.productsrv.getCatpost().subscribe((categories:any) => {
      this.CategoryList = categories ;
      console.log(this.CategoryList)
    });
  }

  //  GetAllProducts(){
  //   fetch('https://dummyjson.com/products')
  //   .then(res => res.json()) 
  //   .then(console.log)
  //   };
  


  addNewProduct(){

   return this.isSidePanelVisible = true;
  }

  closeProduct(){
    return this.isSidePanelVisible = false;
  }

  // onSave(){
  //   this.productsrv.saveProduct(this.productObj).subscribe((res:any)=>{
  //     debugger;
  //     if(res.result){
  //       alert('product created');
  //       this.GetAllProducts();
  //     } else {
  //       alert(res.message)
  //     }
  //   })
  // }


}
