import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoryScreen from '../screens/Category.screen';
import CategoryMealsScreen from '../screens/Meals.screen';
import MealDetailScreen from '../screens/MealDetail.screen';
import FavoriteScreen from '../screens/Favorite.screen';
import FilterScreen from '../screens/Filters.screen';

import COLORS from '../constants/colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : 'white',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
};

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
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorite: {
      screen: FavoriteScreen,
      navigationOptions: {
        headerTitle: 'Your Favorites',
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? COLORS.secondaryColor : 'white',
        },
      },
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
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
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
        ) : (
          'Meals'
        ),
    },
  },
  Favorite: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: COLORS.secondaryColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text>
        ) : (
          'Favorites'
        ),
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabBarConfig, {
        activeColor: 'white',
        shifting: true,
        barStyle: {
          backgroundColor: COLORS.primaryColor,
        },
      })
    : createBottomTabNavigator(tabBarConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'open-sans-bold',
          },
          activeTintColor: COLORS.secondaryColor,
        },
      });

const FilterNavigator = createStackNavigator(
  {
    Filter: {
      screen: FilterScreen,
      navigationOptions: {
        headerTitle: 'Filter Meals',
      },
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: {
      screen: FilterNavigator,
    },
  },
  {
    contentOptions: {
      activeTintColor: COLORS.secondaryColor,
      labelStyle: {
        fontFamily: 'open-sans',
      },
    },
  }
);

export default createAppContainer(MainNavigator);
