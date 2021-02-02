import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  products: any[];

  constructor(private basketService: BasketService) {
    this.products = this.basketService.getList(this.basketService.keyBaskets);
  }

  removeFromBaskets(model: any): void {
    this.basketService.removeFromBaskets(model);
    this.products = this.basketService.getList(this.basketService.keyBaskets);
  }

}
