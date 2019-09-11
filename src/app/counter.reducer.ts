import { createReducer, on } from '@ngrx/store';
import { increase, decrease } from './counter.actions';

export const initialStateNegative = -5;
export const initialStatePositive = 10;

const increaseReducer = createReducer(
  initialStateNegative,
  on(increase, state => state + 1)
);

export function increaseCounterReducer(state: number, action: any) {
  return increaseReducer(state, action);
}

const decreaseReducer = createReducer(
  initialStatePositive,
  on(decrease, state => state - 1)
);

export function decreaseCounterReducer(state: number, action: any) {
  return decreaseReducer(state, action);
}
