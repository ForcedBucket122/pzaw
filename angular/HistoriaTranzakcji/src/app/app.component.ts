import { NgFor } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from './add/add.component';
import { WplatyComponent } from './wplaty/wplaty.component';
import { WyplatyComponent } from './wyplaty/wyplaty.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule, NgFor, AddComponent, WplatyComponent, WyplatyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HistoriaTranzakcji';
  saldo=200;
  listaWplat:Array<String>=[];
  listaWyplat:Array<String>=[];
  add(){
      
  }
}
