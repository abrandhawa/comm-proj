import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { Observable } from 'rxjs';
// import { Comment } from '../../../Models/models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BaseUrl = 'https://dummyjson.com';
  getProduct = '/products';
  getCategory='/products/categories';
  saveProduct='/products/add';
  updateProduct='/products/1'

  constructor(private http:HttpClient) { }

  getPost():Observable<any[]>{
    return this.http.get<any[]>(`${this.BaseUrl}${this.getProduct}`);
  }

  getCatpost():Observable<any[]>{
    return this.http.get<any[]>(`${this.BaseUrl}${this.getCategory}`);
  }

  // savePost(obj:any){
  //  return this.http.post<any>(`${this.BaseUrl}${this.saveProduct}`,obj);
  // }
  // updatePost(obj:any){
  //   return this.http.post<any>(`${this.BaseUrl}${this.updateProduct}`,obj);
  //  }

 
}
