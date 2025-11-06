import { Component, OnInit } from '@angular/core';
// import { Daughter } from "./Counter/daughter/daughter";
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import * as actions from './Counter/counter.actions';
import { selectCounter } from './Counter/counter.selectors';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Daughter } from './Counter/daughter/daughter';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  imports: [CommonModule, Daughter]
})

export class App implements OnInit{
  //Usamos un Observable tipado para la reactividad
  counter$!: Observable<number>;

  // AppState interface is passed to the store in the constructor to inicialized app state.
  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.counter$ = this.store.select(selectCounter)
  }

  increase (): void {
    this.store.dispatch(actions.increment());
  }

  decrease (): void {
    this.store.dispatch(actions.decrement());
  }

  // // MANEJA EL EVENTO duplicateCounter DE DAUGTHER
  // handleDuplicate(duplicateValue: number): void {
  //   // Despachar la acción 'duplicate' (sin payload)
  //   this.store.dispatch(actions.duplicate({number: duplicateValue})); 
  // }

  // // MANEJA EL EVENTO resetCounter de daugther
  // handleReset(newCounterValue: number): void {
  //   // Despachar la acción 'reset', enviando el payload
  //   this.store.dispatch(actions.reset({ newCounter: newCounterValue })); 
  // }
}
