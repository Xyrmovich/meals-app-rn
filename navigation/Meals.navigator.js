import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoryScreen from '../screens/Category.screen';
import CategoryMealsScreen from '../screens/Meals.screen';
import MealDetailScreen from '../screens/MealDetail.screen';
import FavoriteScreen from '../screens/Favorite.screen';

import COLORS from '../constants/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MealNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoryScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories',
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? COLORS.primaryColor : 'white',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
    },
  }
);

const tabBarConfig = {
  Meals: {
    screen: MealNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: COLORS.primaryColor,
    },
  },
  Favorite: {
    screen: FavoriteScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: COLORS.secondaryColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabBarConfig, {
        activeColor: 'white',
        shifting: true,
      })
    : createBottomTabNavigator(tabBarConfig, {
        tabBarOptions: {
          activeTintColor: COLORS.secondaryColor,
        },
      });

export default createAppContainer(MealsFavTabNavigator);
