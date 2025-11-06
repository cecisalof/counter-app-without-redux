import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { selectCounter } from '../counter.selectors';
import * as actions from '../counter.actions'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grand-daughter',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './grand-daughter.html',
  styleUrl: './grand-daughter.scss',
})
export class GrandDaughter implements OnInit {
  // @Input() counter!: number;
  // @Output() changeCounter = new EventEmitter<number>();
  //Usamos un Observable tipado para la reactividad
  counter$!: Observable<number>;


  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.counter$ = this.store.select(selectCounter)
  }

  // MANEJA EL EVENTO resetCounter de daugther
  handleReset(newCounterValue: number): void {
    // Despachar la acción 'reset', enviando el payload
    this.store.dispatch(actions.reset({ newCounter: newCounterValue }));
  }

}
