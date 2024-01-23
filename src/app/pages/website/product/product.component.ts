import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  
  productList:any[]=[];
  
    constructor(private prodSrv:ProductService){
  
    }
  
    ngOnInit(): void {
      this.getAllProducts();
    }
  
    getAllProducts(){
      this.prodSrv.getProducts().subscribe((res:any)=>{
        this.productList= res.data  })
    }
  
  }
  
