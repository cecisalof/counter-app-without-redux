import { Component, signal } from '@angular/core';
import { Daughter } from "./daughter/daughter";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Daughter]
})
export class App {
  protected readonly title = signal('counter-app-without-redux');
  counter: number;

  constructor() {
    this.counter= 20;
  }

  increase (): void {
    this.counter = this.counter + 1;
  }

  decrease (): void {
    this.counter = this.counter - 1;
  }
}
