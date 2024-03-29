import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {

activateCategoryId:number=0;
products: any []= [];

  constructor(private activatedRoute:ActivatedRoute,private prdoSrv:ProductService ){
this.activatedRoute.params.subscribe((res:any)=>{
  debugger;
  this.activateCategoryId = res.id;
  this.loadProducts();
})
  }

  loadProducts(){
this.prdoSrv.getProductsByCategory(this.activateCategoryId).subscribe((res:any)=>{
this.products = res.data;
})
  }

}
