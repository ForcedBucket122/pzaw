import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  cel=''
  kwota=0;
  add(){
    var cel2:String = this.cel+": ";
    var x:number= +this.kwota;
      if(x>=0){
        this.emitKwota.emit(x);
        this.emitCel.emit(cel2.toString())
      }else{
        var x:number=-this.kwota
        this.emitKwota.emit(x);
        this.emitCel.emit(cel2.toString())
      }
  }
  @Output()
  emitKwota = new EventEmitter<number>
  emitCel = new EventEmitter<string>
}
