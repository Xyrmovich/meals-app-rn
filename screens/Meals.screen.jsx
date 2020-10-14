import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import MealItem from '../components/MealItem.component';

import { CATEGORIES, MEALS } from '../data/data';

const CategoryMealsScreen = (props) => {
  const { navigation } = props;
  const catId = navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  const renderItem = (itemData) => {
    const { item } = itemData;

    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        imageUrl={item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: item.id
            }
          })
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderItem}
        style={{ width: '100%' }}
        contentContainerStyle={{ alignItems: 'center' }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const { navigation } = navigationData;
  const catId = navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
