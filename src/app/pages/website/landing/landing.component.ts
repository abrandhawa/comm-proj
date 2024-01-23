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
 
categoryList:any[]=[];

  constructor(private router:Router,private prodSrv:ProductService){


  }
  
ngOnInit(): void {
  
  this.getAllCategory();
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
