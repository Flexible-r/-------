import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { ModelsService } from '../models.service';
interface Alert {
  type: string;
  message: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  products: any[];
  constructor(private basketService: BasketService, private modelsService: ModelsService) {
    this.products = this.modelsService.products;
  }

  increase(product: any) {
    this.basketService.addToBaskets(product);
  }
  
}
export class NgbdAlertCustom {}