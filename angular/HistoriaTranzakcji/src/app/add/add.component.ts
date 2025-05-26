import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Input()
  saldo!: number;
  cel='';
  kwota=0;
  add(){
    // console.log(this.saldo);
    var cel2:String = this.cel+": ";
    var x:number= +this.kwota;
      if(x>=0){
        this.emitWplata.emit(cel2.toString()+" "+x.toString()+"zł");
        this.emitKwota.emit(x);
        // this.emitKwota.emit(x);
        // this.emitCel.emit(cel2.toString())
      }else{
        
        if(this.saldo+this.kwota<0){
          alert("Zbyt niskie saldo!")
        }else{
          var x:number=-this.kwota
          this.emitWyplata.emit(cel2.toString()+" "+-x.toString()+"zł");
          this.emitKwota.emit(-x);
          // this.emitKwota.emit(x);
          // this.emitCel.emit(cel2.toString())
        }
      }
  }
  @Output()
  emitWplata = new EventEmitter<string>;
  @Output()
  emitWyplata = new EventEmitter<string>;
  @Output()
  emitKwota = new EventEmitter<number>;
}
