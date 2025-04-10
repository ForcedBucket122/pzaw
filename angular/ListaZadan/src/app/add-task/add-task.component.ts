import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  noweZadanie="";

  @Output()
  emitZadanie = new EventEmitter<String>();
  add(){
    this.emitZadanie.emit(this.noweZadanie)
    this.noweZadanie="";
  }
}
