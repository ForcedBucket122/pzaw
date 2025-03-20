import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../greeting/greeting.component';
import { LicznikComponent } from "../licznik/licznik.component";

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, LicznikComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  messsageHome=signal('Hello world');

  keyUpHandler(event: KeyboardEvent) {
    console.log(event.key);
  }
}