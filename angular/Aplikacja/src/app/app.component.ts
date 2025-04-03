import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aplikacja';
  table= ["Programowanie w c#", "Angular dla początkujących", "Kurs Django"];
  liczba_kursow=this.table.length;

  ZapiszDoKursu(imie:string, numer:string){
    var wybrane=parseInt(numer);
    if (wybrane<1||wybrane>this.liczba_kursow){
      alert("Podaj prawidlowy numer kursu!");
    }else{
      console.log(imie+"\n"+wybrane);
      alert("Zapisałeś się do kursu!")
    }
  }
}
