import { Component, signal } from '@angular/core';
import { Daughter } from "./Counter/daughter/daughter";
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import * as actions from './Counter/counter.actions';

// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  // imports: [Daughter]
})
export class App {
  // protected readonly title = signal('counter-app-without-redux');
  counter!: number;

  constructor(private store: Store<AppState>) {
    // this.counter= 20;
    this.store.subscribe((state) => {
      this.counter = state.counter;
    })
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
