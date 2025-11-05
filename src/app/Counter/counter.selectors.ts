import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer'; // Asegúrate de que la ruta es correcta

// 1. Selector BASE que apunta a la raíz del estado (la AppState)
// Esta es la "fuente" de la cual extraeremos el dato.
export const selectFeatureCounter = (state: AppState) => state.counter;

// 2. Selector FINAL tipado (garantiza que el resultado sea un Observable<number>) para obtener el valor del contador.
// Usamos createSelector para memoización (rendimiento) y composición.
export const selectCounter = createSelector( // memoriza el resultado lo que mejora el rendimiento de la aplicación.
  selectFeatureCounter, // Verifica si las propiedades de AppState han cambiado. Si state.counter SI ha cambiado, almacena el nuevo resultado en caché y lo emite a los componentes.
  // La función proyectora simplemente devuelve el valor que ya es el contador
  (counter: number) => counter 
);

// Opcional: Si quieres ser más explícito, podrías hacer esto (aunque menos común para una propiedad raíz):
// export const selectCounter = (state: AppState) => state.counter;