import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { CountState, countReducer } from './count/count.reducer';
import { environment } from '../../environments/environment';

export interface State {
  count: CountState;
}

export const reducers: ActionReducerMap<State> = {
  count: countReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

