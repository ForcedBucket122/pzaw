import { NgFor } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-wyplaty',
  imports: [NgFor],
  templateUrl: './wyplaty.component.html',
  styleUrl: './wyplaty.component.css'
})
export class WyplatyComponent {
  @Input()
  listaWyplat:Array<String>=[];
}
