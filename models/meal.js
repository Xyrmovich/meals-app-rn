class Meal {
  constructor(
    id = '',
    categoryIds = '',
    title = '',
    affordability = false,
    complexity = '',
    imageUrl = '',
    duration = '',
    ingredients = '',
    steps,
    isGlutenFree = false,
    isVegan = '',
    isVegetarian = false,
    isLactoseFree = false
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
