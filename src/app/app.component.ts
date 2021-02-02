import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  counter = 0
  increase(value: number) {
    this.counter += value
  }

  Minus(value: number) {
    this.counter -= value
    if (this.counter <= 0) {
      this.counter = 0
    }
  }
  counter1 = 0
  increase1(value: number) {
    this.counter1 += value
  }

  Minus1(value: number) {
    this.counter1 -= value
    if (this.counter1 <= 0) {
      this.counter1 = 0
    }
  }
  counter2 = 0
  increase2(value: number) {
    this.counter2 += value
  }

  Minus2(value: number) {
    this.counter2 -= value
    if (this.counter2 <= 0) {
      this.counter2 = 0
    }
  }
  counter3 = 0
  increase3(value: number) {
    this.counter3 += value
  }

  Minus3(value: number) {
    this.counter3 -= value
    if (this.counter3 <= 0) {
      this.counter3 = 0
    }
  }
  counter4 = 0
  increase4(value: number) {
    this.counter4 += value
  }

  Minus4(value: number) {
    this.counter4 -= value
    if (this.counter4 <= 0) {
      this.counter4 = 0
    }
  }
  counter5 = 0
  increase5(value: number) {
    this.counter5 += value
  }

  Minus5(value: number) {
    this.counter5 -= value
    if (this.counter5 <= 0) {
      this.counter5 = 0
    }
  }
}
