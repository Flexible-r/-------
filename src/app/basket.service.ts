import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  keyBaskets: string = "baskets";
  baskets: any[] = [];
  
  constructor() { }

  addToBaskets(model: any): void {
    this.baskets.push(model);
    this.saveToLocalStorage(this.baskets, this.keyBaskets);
  }

  removeFromBaskets(model: any): void {
    const index = this.baskets.indexOf(model, 0);
    if (index > -1) {
      this.baskets.splice(index, 1);
    }
    this.saveToLocalStorage(this.baskets, this.keyBaskets);
  }

  saveToLocalStorage(list: any[], key: string): void {
    let jsonString = JSON.stringify(list);
    localStorage.setItem(key, jsonString);
  }

  getList(key: string): any[] {
    let jsonString = localStorage.getItem(key);
    if (jsonString) {
      let list = JSON.parse(jsonString);
      if (list) {
        if (key === this.keyBaskets) {
          this.baskets = list;
          return this.baskets;
        }
      }
    }
    return [];
  }
}
