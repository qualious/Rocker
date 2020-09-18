import { combineReducers } from 'redux';
import stateReducer from './state/reducer';
import countryReducer from './country/reducer';

const rootReducer = combineReducers({
  state: stateReducer,
  country: countryReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
