import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ProductData } from '../services/product-data';
import { Card } from '../card/card';
import { NgForOf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HighlightDirective } from "../directives/highlight";

@Component({
  selector: 'app-products',
  imports: [Card, NgForOf, HighlightDirective],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: any[] = [];
  productCopy: any[] = [];

  private data = inject(ProductData);
  private cd = inject(ChangeDetectorRef);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  constructor() {
    this.data.getProduct().subscribe((res: any) => {
      this.products = res.products;
      this.productCopy = [...this.products];
      this.productCopy = [...this.productCopy].sort((a, b) => b.stock - a.stock);
      this.productCopy.forEach((element) => {
        console.log(element.title);
        console.log(element.stock);
      });
      this.cd.detectChanges();
    });
    this.route.queryParamMap.subscribe((res) => {
      const category = res.get('category');

      if (category) {
        this.productCopy = this.products.filter((p) => p.category === category);
      } else {
        this.productCopy = [...this.products];
      }
    });
  }
  filterByCategory(category: string) {
    this.router.navigate(['/products'], { queryParams: { category } });
  }

  sortByPrice(order: 'low' | 'high') {
    if (order === 'low') {
      this.productCopy = [...this.productCopy].sort((a, b) => a.price - b.price);
    } else {
      this.productCopy = [...this.productCopy].sort((a, b) => b.price - a.price);
    }
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
