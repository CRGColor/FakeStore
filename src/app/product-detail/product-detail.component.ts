import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, AsyncPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const id = Number(params.get('id'));
      return this.productService.getProductDetails(id);
    })
  );

}
