import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  template: `
  <app-header/>
  <main>
    <app-home/>
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
