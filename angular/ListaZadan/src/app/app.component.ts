import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { ToDoTaskComponent } from './to-do-task/to-do-task.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,NgFor, AddTaskComponent, DoneTaskComponent, ToDoTaskComponent],
  //aby obslugiwac formularze trzeba zaimportowac FormsModule
  // standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ListaZadan';
  // noweZadanie = "";
  ListaZadan:Array<String>=[];
  ListaZadanWykonanych:Array<String>=[];
  add(event:String){
    this.ListaZadan.push(event)
  }
  remove(zadanie:String){
      this.ListaZadan = this.ListaZadan.filter(e=>e!==zadanie);
  }
  done(zadanie:String){
    this.ListaZadanWykonanych.push(zadanie);
    this.remove(zadanie);
  }
}
