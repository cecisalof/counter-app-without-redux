import { Action, createReducer, on } from "@ngrx/store";
import { increment, decrement } from "./counter.actions";

// export function counterReducer(state: number = 10, action: Action) {
//     switch (action.type) {
//         case increment.type:
//             return state + 1;
//             break;

//         case decrement.type:
//             return state - 1;
//             break;

//         default:
//             return state;
//     }
// }

export const initialState = 10;

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1)
);
export function counterReducer(state: number | undefined, action: Action) {
    return _counterReducer(state, action);
}