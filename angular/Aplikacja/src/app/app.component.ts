import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompComponent } from './comp/comp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aplikacja';
  table= ["Programowanie w c#", "Angular dla początkujących", "Kurs Django"];
}
