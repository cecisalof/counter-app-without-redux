import { Component, OnInit } from '@angular/core';
// import { Daughter } from "./Counter/daughter/daughter";
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import * as actions from './Counter/counter.actions';
import { selectCounter } from './Counter/counter.selectors';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  imports: [CommonModule]
})

export class App implements OnInit{
  //Usamos un Observable tipado para la reactividad
  counter$!: Observable<number>;
  // AppState interface is passed to the store in the constructor to inicialized app state.
  constructor(private store: Store<AppState>) {
    // this.counter= 20;
    // this.store.select('counter).subscribe((counter) => {
    //   this.counter = counter;
    // })
  }
  ngOnInit(): void {
    this.counter$ = this.store.select(selectCounter)
  }

  increase (): void {
    // this.counter = this.counter + 1;
    this.store.dispatch(actions.increment());
  }

  decrease (): void {
    // this.counter = this.counter - 1;
    this.store.dispatch(actions.decrement());
  }
}
