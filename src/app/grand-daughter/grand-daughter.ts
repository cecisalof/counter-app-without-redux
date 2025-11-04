import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grand-daughter',
  imports: [],
  standalone: true,
  templateUrl: './grand-daughter.html',
  styleUrl: './grand-daughter.scss',
})
export class GrandDaughter {
  @Input() counter!: number;
  @Output() changeCounter = new EventEmitter<number>();


  constructor(){

  }

  ngOnInit(): void {
  }

  reset(): void{
    this.counter = 0;
    this.changeCounter.emit(this.counter) 
  }
}
