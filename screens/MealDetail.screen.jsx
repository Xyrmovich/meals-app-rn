import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton.component';
import DefaultText from '../components/DefaultText.component';

import { toggleFavorite } from '../redux/meals/meals.actions';

const ListItem = (props) => {
  const { children } = props;
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const { navigation } = props;
  const mealId = navigation.getParam('mealId');
  const currentMealIsFavoriteMeals = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  const meals = useSelector((state) => state.meals.meals);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  const selectedMeal = meals.find((meal) => meal.id === mealId);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({ isFav: currentMealIsFavoriteMeals });
  }, [currentMealIsFavoriteMeals]);

  const {
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = selectedMeal;

  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText numberOfLines={1}>{duration}m</DefaultText>
        <DefaultText numberOfLines={1}>{complexity.toUpperCase()}</DefaultText>
        <DefaultText numberOfLines={1}>
          {affordability.toUpperCase()}
        </DefaultText>
      </View>
      <DefaultText style={styles.title}>Ingredients</DefaultText>
      {ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <DefaultText style={styles.title}>Steps</DefaultText>
      {steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavoriteHandler = navigationData.navigation.getParam('toggleFav');
  const isFavorite = navigationData.navigation.getParam('isFav');

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorite'
          iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavoriteHandler}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center',
  },
  details: {
    flexDirection: 'row',
    padding: '3.5%',
    justifyContent: 'space-between',
  },
  image: {
    height: Dimensions.get('window').height / 3,
    width: '100%',
  },
  listItem: {
    marginVertical: Dimensions.get('window').height / 100,
    marginHorizontal: '4%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    padding: '3%',
  },
});

export default MealDetailScreen;
