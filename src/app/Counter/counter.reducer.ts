import { createReducer, on } from "@ngrx/store";
import { increment, decrement, duplicate, reset } from "./counter.actions";

export const initialState = 10;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    // 1. Manejo de la acción DUPLICATE  
    on(duplicate, (state, {number}) => state * number),
    // 2. Manejo de la acción RESET
    on(reset, (state, action) => {
        // La lógica: Establecer el estado al valor del payload
        // Usamos 'action' para acceder al payload { newCounter }
        return action.newCounter;
    }),
);