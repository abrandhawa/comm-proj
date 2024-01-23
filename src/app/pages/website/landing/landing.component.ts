import { CommonModule } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
 
productList:any[]=[];
categoryList:any[]=[];

  constructor(private prodSrv:ProductService,private router:Router){


  }
  
ngOnInit(): void {
  this.getAllProducts();
  this.getAllCategory();
}

getAllProducts(){
  this.prodSrv.getProducts().subscribe((res:any)=>{
    this.productList= res.data  })
}

getAllCategory(){
  this.prodSrv.getCategory().subscribe((res:any)=>{
    this.categoryList = res.data
  })
}

navigateToProducts(id:number){
this.router.navigate(['/products',id])
}

}
