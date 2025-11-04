import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GrandDaughter } from "../grand-daughter/grand-daughter";

@Component({
  selector: 'app-daughter',
  imports: [GrandDaughter],
  standalone: true,
  templateUrl: './daughter.html',
  styleUrl: './daughter.scss',
})
export class Daughter implements OnInit{
  @Input() counter!: number;
  @Output() changeCounter = new EventEmitter<number>();

  constructor() {

  }

  ngOnInit(): void {
  }
  
  duplicate(): void {
    this.counter =this.counter * 2;
    this.changeCounter.emit(this.counter)
  }

  resetGrandDaughter(newCounter: number): void {
    this.counter = newCounter;
    this.changeCounter.emit(this.counter)
  }
}
