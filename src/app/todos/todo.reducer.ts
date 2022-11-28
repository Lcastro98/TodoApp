import { createReducer, on } from '@ngrx/store';
import { crear, editar, toggle, borrar } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo('Salvar el mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar escudo del Capitán America')
];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),

  on(borrar, (state, {id}) => state.filter(todo => todo.id !== id)),

  on(toggle, (state, {id}) => {
    
    return state.map(todo => {
    
      if(todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
      
    });
  }),

  on(editar, (state, {id, texto}) => {
    
    return state.map(todo => {
    
      if(todo.id === id) {
        return {
          ...todo,
          texto
        }
      } else {
        return todo;
      }
      
    });
  })
);