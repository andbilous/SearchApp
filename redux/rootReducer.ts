/* eslint-disable no-undef */
import { combineReducers } from 'redux';
import { navigationReducer } from './navigation/reducer';
import { searchReducer } from './search/reducer';

export const rootReducer = combineReducers({
  navigationReducer,
  searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
