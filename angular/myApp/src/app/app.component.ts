import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angularze';
  date = new Date();
  pi = Math.PI;
  dog1 = new Dog('Birma', 4);
  dog2 = new Dog('Amber', 7);

  days=['niedziela', 'poniedzialek', 'wtorek', 'sroda', 'czwartek', 'piatek', 'sobota'];

  showDog(){
    return 'Moje psy to: '+ this.dog1.name+' i '+this.dog2.name;
  }
}
class Dog{
  constructor(public name:string, public age:number){

  }
}
