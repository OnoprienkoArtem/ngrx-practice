import { createFeatureSelector } from '@ngrx/store';
import { countNode, CountState } from './count.reducer';


const selectCountFeature = createFeatureSelector<CountState>(countNode);
