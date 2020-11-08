import MealsActionTypes from './meals.types';

export const toggleFavorite = (id) => ({
  type: MealsActionTypes.TOGGLE_FAVORITE,
  payload: id,
});
