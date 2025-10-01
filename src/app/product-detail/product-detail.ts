import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { ProductData } from '../services/product-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  
  product:any;
  id:any;

  constructor(private route:ActivatedRoute,private pd:ProductData,private cd:ChangeDetectorRef){
    this.id=this.route.snapshot.paramMap.get('id')
    this.pd.getProductById(this.id).subscribe((res)=>{
      this.product=res;
      this.cd.detectChanges()
      console.log("Product Details id:", this.id);
      console.log("Product Details:", this.product);
    })
  }


}
