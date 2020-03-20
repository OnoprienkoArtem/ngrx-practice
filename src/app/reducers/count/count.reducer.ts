import { CountActions } from './count.action';

export const countNode = 'count';

export interface CountState {
  count: number;
  updatedAt: number;
}

const initialState = {
  count: 0,
  updatedAt: Date.now()
};

export const countReducer = (state = initialState, action: CountActions) => {
  return state;
};
