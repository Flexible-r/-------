import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  products = [
    {
      "img": "../assets/Images/Бетон.png",
      "price": 10000,
      "description": "твоё супер пупер описание"
    },
    {
      "img": "../assets/Images/0309456-1.png",
      "price": 10000,
      "description": "твоё супер пупер описание"
    },
    {
      "img": "./assets/Images/image.png",
      "price": 10000,
      "description": "твоё супер пупер описание"
    },
    {
      "img": "../assets/Images/images.png",
      "price": 10000,
      "description": "твоё супер пупер описание"
    },
    {
      "img": "../assets/Images/unnamed.png",
      "price": 10000,
      "description": "твоё супер пупер описание"
    },
    {
      "img": "../assets/Images/aaa.png",
      "price": 10000,
      "description": "твоё супер пупер описание"
    },
  ]
}
