import { MEALS } from '../../data/data';
import MealsActionTypes from './meals.types';
import FilterActionTypes from '../filters/filter.types';

import { toggleFavoriteMeal } from './meals.utils';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case MealsActionTypes.TOGGLE_FAVORITE:
      return {
        ...state,
        favoriteMeals: toggleFavoriteMeal(
          state.meals,
          state.favoriteMeals,
          action.payload
        ),
      };
    case FilterActionTypes.SET_FILTERS:
      const appliedFilters = action.payload;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }

        return true;
      });

      return {
        ...state,
        filteredMeals: updatedFilteredMeals,
      };
    default:
      return state;
  }
};

export default mealReducer;
