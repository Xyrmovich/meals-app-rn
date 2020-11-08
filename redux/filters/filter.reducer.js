import FilterActionTypes from './filter.types';

const initialState = {
  isGlutenFree: false,
  isLactoseFree: false,
  isVegan: false,
  isVegetarian: false,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default filterReducer;
