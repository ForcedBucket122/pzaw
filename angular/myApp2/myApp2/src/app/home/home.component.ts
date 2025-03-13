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
}
