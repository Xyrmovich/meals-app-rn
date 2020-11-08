import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import DefaultText from '../components/DefaultText.component';
import MealList from '../components/MealList.component';
import CustomHeaderButton from '../components/HeaderButton.component';
const FavoriteScreen = (props) => {
  const { navigation } = props;
  const availableMeals = useSelector((state) => state.meals.favoriteMeals);

  return availableMeals.length !== 0 || !availableMeals ? (
    <MealList listData={availableMeals} navigation={navigation} />
  ) : (
    <View style={styles.content}>
      <DefaultText>No favorite meals found. Start adding some!</DefaultText>
    </View>
  );
};

FavoriteScreen.navigationOptions = (navigationData) => {
  const { navigation } = navigationData;

  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='menu'
          iconName='ios-menu'
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoriteScreen;
