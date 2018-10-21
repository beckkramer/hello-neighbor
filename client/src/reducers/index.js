import { combineReducers } from 'redux';

import LocationReducer from './location';

const rootReducer = combineReducers({
  location: LocationReducer
});

export default rootReducer;