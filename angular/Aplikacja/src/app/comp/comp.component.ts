import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-comp',
  imports: [NgFor],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {
  table= ["Programowanie w c#", "Angular dla początkujących", "Kurs Django"];
}
