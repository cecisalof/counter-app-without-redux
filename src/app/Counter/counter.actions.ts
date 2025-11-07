import { createAction, props } from "@ngrx/store";

// actions describe what should happen: decrement, increment, etc.
export const increment = createAction('[Counter Componente] Increment');

export const decrement = createAction('[Counter Componente] Decrement');

// 1. Acción Duplicar (sin payload)
export const duplicate = createAction(
  '[Counter Component] Duplicate',
  //props es una función de NgRx que se utiliza para definir la estructura de datos (el payload) que la acción llevará consigo
  props<{ number: number }>() 
);

// 2. Acción Resetear (con payload)
// Usamos 'props' para definir el tipo de datos que llevará esta acción (el nuevo valor)
export const reset = createAction(
  '[Counter Component] Reset',
  props<{ newCounter: number }>() 
);