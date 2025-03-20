import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-licznik',
  imports: [],
  templateUrl: './licznik.component.html',
  styleUrl: './licznik.component.css'
})
export class LicznikComponent {
  counterValue = signal(0);
  increment(){
    // this.counterValue.set(this.counterValue() + 1);
    this.counterValue.update((val)=>val+1);
  }
  reset(){
    this.counterValue.update((val)=>0);
  }
  decrement(){
    this.counterValue.update((val)=>val-1);
  }
}
