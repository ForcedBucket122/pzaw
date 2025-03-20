import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LicznikComponent } from './licznik/licznik.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent, LicznikComponent],
  template: `
  <app-header/>
  <main>
    <app-home/>
    <app-licznik/>
  </main>
  `,
  styles: [`
    main{
      padding:16px;
    }
    `]
})
export class AppComponent {
  title =signal('myApp');
  
}
