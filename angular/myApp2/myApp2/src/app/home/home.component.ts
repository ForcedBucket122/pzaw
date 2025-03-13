import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  messsageHome=signal('Hello world');
  product1 = new Product('BMW', 180000, 'auto')
  product2 = new Product('Dell', 2600, 'komputer')
}
class Product{
  constructor(public name: string, public price: number, public category: string) {}
}