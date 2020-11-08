export const toggleFavoriteMeal = (meals, favoriteMeals, mealId) => {
  const existingIndex = favoriteMeals.findIndex((meal) => meal.id === mealId);

  if (existingIndex >= 0) {
    const updateFavMeals = [...favoriteMeals];
    updateFavMeals.splice(existingIndex, 1);
    return updateFavMeals;
  } else {
    return favoriteMeals.concat(meals.find(meal => meal.id === mealId));
  }
};
