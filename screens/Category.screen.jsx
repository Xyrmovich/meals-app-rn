import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile.component';

import { CATEGORIES } from '../data/data';

const CategoryScreen = (props) => {
  const { navigation } = props;

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      style={styles.grid}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
  },
});

export default CategoryScreen;
