import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { selectCounter } from '../counter.selectors';
import { GrandDaughter } from "../grand-daughter/grand-daughter";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../counter.actions'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daughter',
  imports: [CommonModule,GrandDaughter],
  standalone: true,
  templateUrl: './daughter.html',
  styleUrl: './daughter.scss',
})
export class Daughter implements OnInit{
  //Usamos un Observable tipado para la reactividad
    counter$!: Observable<number>;
  // @Output() duplicateCounter = new EventEmitter<void>();
  // @Output() resetCounter = new EventEmitter<number>();

  constructor(private store: Store<AppState>) {}

   ngOnInit(): void {
      this.counter$ = this.store.select(selectCounter)
    }
  
  duplicate(): void {
    this.store.dispatch(actions.duplicate({number: 2}))
  }
}
