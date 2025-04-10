import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-to-do-task',
  imports: [NgFor],
  templateUrl: './to-do-task.component.html',
  styleUrl: './to-do-task.component.css'
})
export class ToDoTaskComponent {
  @Input()
  ListaZadan:Array<String>=[];

  @Output()
  emitDone = new EventEmitter<String>();
  
  @Output()
  emitRemove = new EventEmitter<String>();


  ListaZadanWykonanych:Array<String>=[];
  remove(zadanie:String){
      this.emitRemove.emit(zadanie);
  }
  done(zadanie:String){
    this.emitDone.emit(zadanie);
  }
}
