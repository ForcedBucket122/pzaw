import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-done-task',
  imports: [NgFor],
  templateUrl: './done-task.component.html',
  styleUrl: './done-task.component.css'
})
export class DoneTaskComponent {
  @Input()
  ListaZadanWykonanych:Array<String>=[]
}
