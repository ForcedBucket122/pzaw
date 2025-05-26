import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wplaty',
  imports: [NgFor],
  templateUrl: './wplaty.component.html',
  styleUrl: './wplaty.component.css'
})
export class WplatyComponent {


  @Input()
  listaWplat:Array<String>=[];
}
