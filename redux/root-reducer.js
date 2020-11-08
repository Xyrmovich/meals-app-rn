import { combineReducers } from 'redux';

import mealsReducer from './meals/meals.reducer';
import filterReducer from './filters/filter.reducer';

const rootReducer = combineReducers({
  meals: mealsReducer,
  filters: filterReducer,
});

export default rootReducer;
